import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getProject, projects } from "@/data/projects";

const publicFile = (src: string) => join(process.cwd(), "public", decodeURI(src));
const DASH = /[\u2013\u2014]/;

/** Every string anywhere inside a value, with its path. */
function strings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object")
    return Object.entries(value).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k));
  return [];
}

describe("projects data", () => {
  it("has projects", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("has unique slugs and numbers", () => {
    const slugs = projects.map((p) => p.slug);
    const numbers = projects.map((p) => p.number);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(numbers).size).toBe(numbers.length);
  });

  it("uses URL-safe slugs", () => {
    for (const p of projects) expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("numbers projects in order", () => {
    projects.forEach((p, i) => expect(p.number).toBe(String(i + 1).padStart(3, "0")));
  });

  it.each(projects.map((p) => [p.slug, p] as const))(
    "%s has a card image file with alt text",
    (_slug, p) => {
      expect(p.cardImage, "cardImage").toBeDefined();
      expect(p.cardImage!.alt.trim().length).toBeGreaterThan(10);
      expect(existsSync(publicFile(p.cardImage!.src)), p.cardImage!.src).toBe(true);
    },
  );

  it("case study screenshots, demo, and downloads exist in public/", () => {
    for (const p of projects) {
      const cs = p.caseStudy;
      if (!cs) continue;
      for (const s of cs.screenshots) {
        expect(s.alt.trim(), `${p.slug} screenshot alt`).not.toBe("");
        expect(existsSync(publicFile(s.src)), s.src).toBe(true);
      }
      if (cs.demo) {
        const demo = cs.demo as typeof cs.demo & { captions?: string };
        for (const f of [demo.src, demo.poster, demo.captions].filter(Boolean) as string[]) {
          expect(existsSync(publicFile(f)), f).toBe(true);
        }
        expect(demo.label.trim()).not.toBe("");
        expect(demo.caption.trim()).not.toBe("");
      }
      if (cs.download.href.startsWith("/")) {
        expect(existsSync(publicFile(cs.download.href)), cs.download.href).toBe(true);
      }
    }
  });

  it("local links point at files in public/", () => {
    for (const p of projects)
      for (const l of p.links)
        if (l.href.startsWith("/")) expect(existsSync(publicFile(l.href)), l.href).toBe(true);
  });

  it("contains no em or en dashes", () => {
    const hits = strings(projects).filter(([, s]) => DASH.test(s));
    expect(hits).toEqual([]);
  });

  it("getProject finds projects by slug", () => {
    for (const p of projects) expect(getProject(p.slug)).toBe(p);
    expect(getProject("nope")).toBeUndefined();
  });
});
