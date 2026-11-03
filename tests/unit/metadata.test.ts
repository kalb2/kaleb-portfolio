import { describe, expect, it } from "vitest";
import { site } from "@/data/site";
import { baseOpenGraph, pageMetadata } from "@/lib/metadata";

describe("pageMetadata", () => {
  it("builds title, canonical, Open Graph, and Twitter fields", () => {
    const m = pageMetadata({ title: "About", description: "Desc", path: "/about" });
    expect(m.title).toBe("About");
    expect(m.description).toBe("Desc");
    expect(m.alternates).toEqual({ canonical: "/about" });
    expect(m.openGraph).toMatchObject({
      ...baseOpenGraph,
      title: `About | ${site.name}`,
      description: "Desc",
      url: "/about",
    });
    expect(m.twitter).toMatchObject({
      card: "summary_large_image",
      title: `About | ${site.name}`,
      description: "Desc",
    });
  });

  it("uses the site title and leaves title unset when no title is given", () => {
    const m = pageMetadata({ description: "Home", path: "/" });
    expect(m).not.toHaveProperty("title");
    expect(m.openGraph).toMatchObject({ title: site.title, url: "/" });
    expect(m.twitter).toMatchObject({ title: site.title });
  });

  it("includes the site-wide share images by default", () => {
    const m = pageMetadata({ title: "X", description: "d", path: "/x" });
    const og = (m.openGraph as { images: { url: string; width: number; height: number; alt: string }[] }).images;
    const tw = (m.twitter as { images: { url: string }[] }).images;
    expect(og).toHaveLength(1);
    expect(og[0]).toMatchObject({ url: "/opengraph-image", width: 1200, height: 630 });
    expect(og[0].alt).toContain(site.name);
    expect(tw[0].url).toBe("/twitter-image");
  });

  it("omits images when the route has its own share images", () => {
    const m = pageMetadata({ title: "X", description: "d", path: "/x", defaultImages: false });
    expect(m.openGraph).not.toHaveProperty("images");
    expect(m.twitter).not.toHaveProperty("images");
  });

  it("baseOpenGraph uses the site name and en_US", () => {
    expect(baseOpenGraph).toEqual({ type: "website", siteName: site.name, locale: "en_US" });
  });
});
