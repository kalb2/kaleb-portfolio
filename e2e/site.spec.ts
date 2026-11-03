import { expect, test } from "@playwright/test";
import { allRoutes, canonicalFor, navLinks, projects, site } from "./routes";

test("homepage project cards have a real image, alt text, and the right link", async ({
  page,
}) => {
  await page.goto("/");
  const withImages = projects.filter((p) => p.cardImage);
  expect(withImages.length, "every project has a card image").toBe(
    projects.length,
  );
  for (const project of projects) {
    const link = page.locator(`article a[href="/projects/${project.slug}"]`);
    await expect(link, project.slug).toHaveCount(1);
    const img = link.locator("img");
    await expect(img, `${project.slug} card image`).toHaveCount(1);
    await expect(img).toHaveAttribute("alt", project.cardImage!.alt);
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth))
      .toBeGreaterThan(0);
    await expect(link).toContainText(project.title);
  }
});

test("card links open the matching project page", async ({ page }) => {
  await page.goto("/");
  const first = projects[0];
  await page.locator(`article a[href="/projects/${first.slug}"]`).click();
  await expect(page).toHaveURL(new RegExp(`/projects/${first.slug}$`));
  await expect(page).toHaveTitle(`${first.title} | ${site.name}`);
});

test("navigation links work", async ({ page, isMobile }) => {
  await page.goto("/");
  for (const link of navLinks) {
    if (isMobile || link.href === "/") {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.locator("#site-menu").getByRole("link", { name: link.label }).click();
    } else {
      await page
        .locator("header")
        .getByRole("link", { name: link.label, exact: true })
        .first()
        .click();
    }
    await expect(page).toHaveURL(
      link.href === "/" ? /\/$/ : new RegExp(`${link.href}$`),
    );
    await expect(page.locator("#site-menu")).toHaveCount(0);
  }
  await page.locator("header").getByRole("link", { name: `${site.name} home` }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("Feature Request Matcher demo video is set up for playback", async ({
  page,
  request,
}) => {
  const project = projects.find((p) => p.caseStudy?.demo)!;
  // `captions` is optional and only present once the data adds a track.
  const demo = project.caseStudy!.demo! as {
    src: string;
    poster: string;
    captions?: string;
  };
  await page.goto(`/projects/${project.slug}`);
  const video = page.locator("video");
  await expect(video).toHaveCount(1);
  await expect(video).toHaveAttribute("poster", demo.poster);
  await expect(video).toHaveAttribute("controls", "");
  await expect(video).toHaveAttribute("preload", "metadata");
  await expect(video).not.toHaveAttribute("autoplay");
  expect(await video.evaluate((v: HTMLVideoElement) => v.autoplay)).toBe(false);
  expect(await video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
  await expect(video.locator("source")).toHaveAttribute("src", demo.src);
  for (const url of [demo.src, demo.poster]) {
    expect((await request.get(url)).status(), url).toBe(200);
  }
  // Captions track: required whenever the data declares one.
  if (demo.captions) {
    const track = video.locator('track[kind="captions"]');
    await expect(track).toHaveAttribute("src", demo.captions);
    const vtt = await request.get(demo.captions);
    expect(vtt.status()).toBe(200);
    expect(await vtt.text()).toMatch(/^WEBVTT/);
  } else {
    test.info().annotations.push({
      type: "note",
      description: "demo has no captions track in data yet",
    });
  }
});

test("unknown routes return the 404 page", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist-xyz");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  await expect(page).toHaveTitle(`Page not found | ${site.name}`);
  await page.getByRole("link", { name: "Back home" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test.describe("crawler files", () => {
  test.skip(({ isMobile }) => isMobile, "same response on every viewport");

  test("robots.txt allows everything and points to the sitemap", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/User-Agent: \*/i);
    expect(body).toMatch(/Allow: \/\s/);
    expect(body).not.toMatch(/Disallow: \/\s/);
    expect(body).toContain(`Sitemap: ${site.url}/sitemap.xml`);
  });

  test("sitemap.xml lists exactly the 5 main pages and every project", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const locs = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.sort()).toEqual(allRoutes.map((r) => canonicalFor(r.path)).sort());
    expect(allRoutes).toHaveLength(5 + projects.length);
  });
});
