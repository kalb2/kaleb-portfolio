import { expect, test } from "@playwright/test";

test("homepage metrics use approved Connecteam figures and responsive cells", async ({ page, isMobile }) => {
  await page.goto("/");
  const strip = page.getByRole("region", { name: "Connecteam portfolio results" });
  await expect(strip).toBeVisible();
  for (const value of ["$2.15M", "105%", "96%", "99%"]) {
    await expect(strip.getByRole("definition").filter({ hasText: value })).toBeVisible();
  }
  await expect(strip).toContainText("Across 30 clients");
  const cells = await strip.locator("dl > div").evaluateAll((els) => els.map((el) => {
    const { x, y } = el.getBoundingClientRect();
    return { x, y };
  }));
  expect(cells).toHaveLength(4);
  expect(cells[0].y).toBe(cells[1].y);
  if (isMobile) {
    expect(cells[2].y).toBeGreaterThan(cells[0].y);
    expect(cells[2].x).toBe(cells[0].x);
    expect(cells[3].y).toBe(cells[2].y);
  } else {
    expect(new Set(cells.map((cell) => cell.y)).size).toBe(1);
  }
});

test("Person schema describes enterprise customer success and real profile links", async ({ page }) => {
  await page.goto("/");
  const person = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(person).not.toHaveProperty("email");
  expect(person.jobTitle).toBe("Enterprise Customer Success Manager");
  expect(person.sameAs).toContain("https://www.linkedin.com/in/kalebjensen");
  expect(person.knowsAbout).toEqual(expect.arrayContaining(["Strategic CSM", "HubSpot", "Customer onboarding", "CS operations", "AI workflows"]));
});

test("Hire Me offerings link to real project evidence", async ({ page }) => {
  await page.goto("/hire");
  const offerings = page.getByRole("region", { name: "Side project offerings" });
  await expect(offerings.getByRole("article")).toHaveCount(4);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(page.viewportSize()!.width);
  for (const href of ["hubspot-mdf", "connecteam-internal-tools", "feature-request-matcher"]) {
    expect(await offerings.locator(`a[href="/projects/${href}"]`).count()).toBeGreaterThan(0);
  }
});

for (const path of ["/contact", "/hire"]) {
  test(`${path} hides an unconfigured form and shows LinkedIn`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("form", { name: "Send an inquiry" })).toHaveCount(0);
    const fallback = page.getByRole("link", { name: "connect with me on LinkedIn", exact: true });
    await expect(fallback).toBeVisible();
    await expect(fallback).toHaveAttribute("href", "https://www.linkedin.com/in/kalebjensen");
    await expect(page.getByRole("link", { name: "Book a call" })).toHaveCount(0);
  });
}
