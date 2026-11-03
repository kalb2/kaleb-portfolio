import { expect, test } from "@playwright/test";

test.skip(({ isMobile }) => isMobile, "crawl once, on desktop");

test("no broken internal links or images", async ({ page, request, baseURL }) => {
  test.setTimeout(180_000);
  const origin = new URL(baseURL!).origin;
  const queue = ["/"];
  const seenPages = new Set<string>();
  const assets = new Map<string, string>(); // url -> found on
  const broken: string[] = [];

  while (queue.length) {
    const path = queue.shift()!;
    if (seenPages.has(path)) continue;
    seenPages.add(path);
    const res = await page.goto(path, { waitUntil: "networkidle" });
    if (!res || res.status() >= 400) {
      broken.push(`${path} -> ${res?.status()}`);
      continue;
    }
    if (!(res.headers()["content-type"] ?? "").includes("text/html")) continue;
    const found = await page.evaluate(() => {
      const urls: { kind: string; url: string }[] = [];
      document.querySelectorAll("a[href]").forEach((a) =>
        urls.push({ kind: "link", url: (a as HTMLAnchorElement).href }),
      );
      document.querySelectorAll("img").forEach((img) => {
        const el = img as HTMLImageElement;
        if (el.currentSrc || el.src) urls.push({ kind: "img", url: el.currentSrc || el.src });
        if (!el.complete || el.naturalWidth === 0)
          urls.push({ kind: "img-not-rendered", url: el.currentSrc || el.src });
      });
      document
        .querySelectorAll("video[poster], video source[src], video track[src], link[rel~='icon'][href]")
        .forEach((el) =>
          urls.push({
            kind: "asset",
            url: (el as HTMLVideoElement).poster || (el as HTMLSourceElement).src || (el as HTMLLinkElement).href,
          }),
        );
      return urls;
    });
    for (const { kind, url } of found) {
      const u = new URL(url, origin);
      if (u.origin !== origin) continue;
      u.hash = "";
      if (kind === "img-not-rendered") {
        // Lazy images may not have loaded; they are still fetched below.
        assets.set(u.toString(), path);
      } else if (kind === "link") {
        const isPage = !/\.[a-z0-9]{2,5}$/i.test(u.pathname);
        if (isPage) queue.push(u.pathname + u.search);
        else assets.set(u.toString(), path);
      } else {
        assets.set(u.toString(), path);
      }
    }
  }

  for (const [url, from] of assets) {
    const res = await request.get(url);
    if (res.status() >= 400) broken.push(`${url} (on ${from}) -> ${res.status()}`);
  }

  test.info().annotations.push({
    type: "crawl",
    description: `${seenPages.size} pages, ${assets.size} assets`,
  });
  expect(seenPages.size).toBeGreaterThanOrEqual(12);
  expect(broken).toEqual([]);
});
