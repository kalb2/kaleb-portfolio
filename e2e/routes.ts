import { careerCaseStudies } from "../src/data/careerCaseStudies";
import { projects } from "../src/data/projects";
import { navLinks, site } from "../src/data/site";

export type Route = { path: string; title: string };

/** Every route in the sitemap: the main pages and one page per project. */
export const mainRoutes: Route[] = navLinks.map((link) => ({
  path: link.href,
  title: link.href === "/" ? site.title : `${link.href === "/experience" ? "Enterprise Customer Success Experience" : link.label} | ${site.name}`,
}));

export const projectRoutes: Route[] = projects.map((project) => ({
  path: `/projects/${project.slug}`,
  title: `${project.title} | ${site.name}`,
}));

export const caseStudyRoutes: Route[] = careerCaseStudies.map((study) => ({
  path: `/case-studies/${study.slug}`,
  title: `${study.company} Case Study | ${site.name}`,
}));

export const allRoutes: Route[] = [...mainRoutes, ...projectRoutes, ...caseStudyRoutes];

export const canonicalFor = (path: string) =>
  path === "/" ? site.url : `${site.url}${path}`;

export { projects, navLinks, site };
