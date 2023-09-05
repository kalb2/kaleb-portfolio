import React from "react";
import Carousel from "../../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight({ project }) {
  const Component = project.component;

  return (
    <div className="divide-y">
      <div className="h-3/4 flex bg-neutral-200 place-content-center">
        {project.imageUrl ? (
          <img src={project.imageUrl} className=" object-contain" />
        ) : (
          Component && (
            <div className="flex flex-col justify-center overflow-hidden">
              <Component />
            </div>
          )
        )}
      </div>

      <div className="flex h-1/4 divide-x ">
        <ProjectName title={project.title} />
        <ProjectDescription description={project.description} />
      </div>
    </div>
  );
}
