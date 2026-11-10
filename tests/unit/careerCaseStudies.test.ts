import { describe, expect, it } from "vitest";
import {
  careerCaseStudies,
  getCareerCaseStudy,
} from "@/data/careerCaseStudies";

const DASH = /[\u2013\u2014]/;
const APPROVED_SNIPPETS = [
  "$2.15M",
  "30 clients",
  "105%",
  "96%",
  "99%",
  "+35%",
  "15% faster",
  "$2M ARR",
  "50 accounts",
  "97%",
  "110%",
  "$150K",
  "+300%",
  "$50K+",
  "90%+",
];

function strings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value))
    return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object")
    return Object.entries(value).flatMap(([k, v]) =>
      strings(v, path ? `${path}.${k}` : k),
    );
  return [];
}

describe("career case studies", () => {
  it("has three recruiter STAR studies with unique slugs", () => {
    expect(careerCaseStudies).toHaveLength(3);
    const slugs = careerCaseStudies.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(3);
  });

  it("uses URL-safe slugs and ordered numbers", () => {
    careerCaseStudies.forEach((study, index) => {
      expect(study.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(study.number).toBe(String(index + 1).padStart(3, "0"));
      expect(study.situation.trim()).not.toBe("");
      expect(study.task.trim()).not.toBe("");
      expect(study.action.trim()).not.toBe("");
      expect(study.results.length).toBeGreaterThan(0);
    });
  });

  it("includes only approved resume figures somewhere in the pack", () => {
    const blob = strings(careerCaseStudies)
      .map(([, s]) => s)
      .join("\n");
    for (const snippet of APPROVED_SNIPPETS) {
      expect(blob, snippet).toContain(snippet);
    }
  });

  it("contains no em or en dashes and no personal email", () => {
    const hits = strings(careerCaseStudies).filter(([, s]) => DASH.test(s));
    expect(hits).toEqual([]);
    const emails = strings(careerCaseStudies).filter(([, s]) =>
      /@gmail|mailto:/i.test(s),
    );
    expect(emails).toEqual([]);
  });

  it("getCareerCaseStudy finds studies by slug", () => {
    for (const study of careerCaseStudies) {
      expect(getCareerCaseStudy(study.slug)).toBe(study);
    }
    expect(getCareerCaseStudy("nope")).toBeUndefined();
  });
});
