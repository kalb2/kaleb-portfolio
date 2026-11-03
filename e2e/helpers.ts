import type { Page } from "@playwright/test";

/** Collects console errors and uncaught page errors while a page loads. */
export function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  return errors;
}

/** Visible text of the page, with any em or en dashes it contains. */
export async function findDashes(page: Page) {
  const text = await page.evaluate(() => document.body.innerText);
  const hits: string[] = [];
  const re = /.{0,30}[\u2013\u2014].{0,30}/g;
  for (const m of text.matchAll(re)) hits.push(m[0].replace(/\s+/g, " "));
  return hits;
}
