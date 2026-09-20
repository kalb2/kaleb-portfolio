import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectRail() {
  return (
    <div
      className="rail flex min-h-[calc(100vh-7rem)] snap-x snap-mandatory items-center gap-10 overflow-x-auto overscroll-x-contain border-b border-black px-8 py-16 md:px-10"
      style={{
        backgroundImage: "url(/cardboard.png)",
        backgroundRepeat: "repeat",
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
