import type { MetadataRoute } from "next";
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
  return [...pages, ...projectPages];
}
