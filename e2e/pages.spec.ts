import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { findDashes, trackErrors } from "./helpers";
import { allRoutes, canonicalFor, site } from "./routes";

/** Map an absolute production URL onto the server under test. */
const local = (url: string, baseURL: string) =>
  url.startsWith(site.url) ? baseURL + url.slice(site.url.length) : url;

for (const route of allRoutes) {
  test.describe(`page ${route.path}`, () => {
    test("loads with metadata, no console errors, no dashes", async ({
      page,
      request,
      baseURL,
    }, testInfo) => {
      const errors = trackErrors(page);
      const res = await page.goto(route.path, { waitUntil: "networkidle" });
      expect(res?.status()).toBe(200);

      await expect(page).toHaveTitle(route.title);

      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute("href");
      expect(canonical?.replace(/\/$/, "")).toBe(canonicalFor(route.path));

      const ogImage = await page
        .locator('meta[property="og:image"]')
        .first()
        .getAttribute("content");
      expect(ogImage, "og:image").toBeTruthy();
      // Production uses the site URL. Vercel previews point file-based share
      // images at the preview deployment instead, which is also fine.
      expect(
        ogImage!.startsWith(site.url) || ogImage!.startsWith(baseURL!),
        `og:image is absolute (${ogImage})`,
      ).toBe(true);
      const img = await request.get(local(ogImage!, baseURL!));
      expect(img.status(), `og:image ${ogImage}`).toBe(200);
      expect(img.headers()["content-type"]).toMatch(/^image\//);

      for (const prop of ["og:title", "og:description", "og:url"]) {
        await expect(
          page.locator(`meta[property="${prop}"]`),
          prop,
        ).toHaveCount(1);
      }

      expect(await findDashes(page), "em or en dashes in visible text").toEqual(
        [],
      );

      await testInfo.attach(`${testInfo.project.name}${route.path.replace(/\//g, "_")}.png`, {
        body: await page.screenshot({ fullPage: true }),
        contentType: "image/png",
      });

      expect(errors, "console errors").toEqual([]);
    });

    test("has no serious or critical axe violations", async ({
      page,
    }, testInfo) => {
      await page.goto(route.path, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page }).analyze();
      const blocking = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical",
      );
      const other = results.violations.filter((v) => !blocking.includes(v));
      const summary = (list: typeof results.violations) =>
        list.map((v) => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.map((n) => n.target.join(" ")).slice(0, 5),
        }));
      await testInfo.attach("axe-results.json", {
        body: JSON.stringify(
          { blocking: summary(blocking), other: summary(other) },
          null,
          2,
        ),
        contentType: "application/json",
      });
      for (const v of other) {
        testInfo.annotations.push({
          type: `axe ${v.impact}`,
          description: `${v.id}: ${v.help} (${v.nodes.length} nodes)`,
        });
      }
      expect(summary(blocking)).toEqual([]);
    });
  });
}
