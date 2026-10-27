import Image from "next/image";
import { CardHandles } from "@/components/CardHandles";
import { ProjectPattern } from "@/components/ProjectPattern";
import { Project } from "@/data/projects";

type ProjectHeroArtProps = {
  project: Project;
};

/**
 * Detail page hero art: the project's card image in the bordered card frame,
 * falling back to the shape pattern when a project has no image.
 */
export function ProjectHeroArt({ project }: ProjectHeroArtProps) {
  return (
    <div className="relative mx-auto max-w-md outline outline-1 outline-black">
      <CardHandles />
      <div className="relative h-0 pt-[120%]">
        <div className="absolute inset-0 overflow-hidden bg-white">
          {project.cardImage ? (
            <Image
              src={project.cardImage.src}
              alt={project.cardImage.alt}
              fill
              priority
              sizes="(min-width: 640px) 28rem, calc(100vw - 3rem)"
              className="object-cover object-top"
            />
          ) : (
            <ProjectPattern pattern={project.pattern} number={project.number} />
          )}
        </div>
      </div>
    </div>
  );
}
