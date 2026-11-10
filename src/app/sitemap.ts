import type { MetadataRoute } from "next";
import { careerCaseStudies } from "@/data/careerCaseStudies";
import { projects } from "@/data/projects";
import { navLinks, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navLinks.map((link) => ({
    url: link.href === "/" ? site.url : `${site.url}${link.href}`,
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));
  const projectPages = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: project.caseStudy ? 0.8 : 0.6,
  }));
  const caseStudyPages = careerCaseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...pages, ...projectPages, ...caseStudyPages];
}
