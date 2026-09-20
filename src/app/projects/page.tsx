import type { Metadata } from "next";
import Link from "next/link";
import { ProjectRail } from "@/components/ProjectRail";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Internal tools, HubSpot systems, and side projects from Kaleb Jensen.",
};

export default function ProjectsPage() {
  return (
    <>
      <TitleBar text="Projects" />
      <ProjectRail />
      <SectionBreak />
      <div className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="hidden border-r border-black p-4 md:block">
          <h2 className="text-2xl uppercase">Index</h2>
        </div>
        <div className="border-black md:border-r">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex items-baseline justify-between gap-4 border-b border-black px-4 py-5 last:border-b-0 hover:bg-black hover:text-white"
            >
              <span className="font-mono text-sm">{project.number}</span>
              <span className="flex-1 text-2xl uppercase tracking-tighter">
                {project.title}
              </span>
              <span className="hidden font-mono text-xs uppercase sm:inline">
                Case study
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden p-6 md:block">
          <p className="max-w-sm text-sm leading-relaxed">
            Six projects. No React-hook demos. Each case study is problem, what
            was built, and outcome.
          </p>
        </div>
      </div>
    </>
  );
}
