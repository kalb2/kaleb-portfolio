import { preload } from "react-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const CARDBOARD_TEXTURE = "/cardboard.webp";

type ProjectRailProps = {
  /** Set when the rail is above the fold (Projects page) so its texture and
   * first card load with the document instead of after the stylesheet. */
  priority?: boolean;
};

export function ProjectRail({ priority = false }: ProjectRailProps) {
  if (priority) {
    preload(CARDBOARD_TEXTURE, { as: "image", fetchPriority: "high" });
  }

  return (
    <section
      aria-label="Projects"
      className="rail flex min-h-[calc(100vh-7rem)] snap-x snap-mandatory items-center gap-10 overflow-x-auto overscroll-x-contain border-b border-black px-8 py-16 md:px-10"
      style={{
        backgroundImage: `url(${CARDBOARD_TEXTURE})`,
        backgroundRepeat: "repeat",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={priority && index === 0}
        />
      ))}
    </section>
  );
}
