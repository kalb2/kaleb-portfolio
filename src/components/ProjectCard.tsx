import Link from "next/link";
import { Project } from "@/data/projects";
import { CardHandles } from "./CardHandles";
import { ProjectPattern } from "./ProjectPattern";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-[min(82vw,22rem)] shrink-0 snap-start odd:-translate-y-4 even:translate-y-4 sm:w-[26rem]">
      <p className="pb-3 pl-2 font-mono text-[1.35rem] uppercase leading-none sm:text-2xl">
        {project.number}
      </p>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative outline outline-1 outline-black">
          <CardHandles />
          <div className="relative h-0 pt-[120%]">
            <div className="absolute inset-0">
              <ProjectPattern
                pattern={project.pattern}
                number={project.number}
              />
            </div>
          </div>
          <div className="border-t border-black bg-white p-3">
            <p className="pl-2 text-2xl uppercase leading-tight tracking-tighter sm:text-3xl">
              {project.title}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
