import React from "react";
import Carousel from "../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight({project}) {
  const Component = project.component

  return (
    <div className="divide-y">
      <div className="h-2/3">
        {/* <Carousel /> */}
        <div className="group relative h-full w-full">
        <div className="relative h-full overflow-hidden">
          {/* <img src={project.imageUrl} /> */}
    {Component && <Component />}
          
          </div>
        </div>
      </div>

      <div className="flex h-1/3 divide-x">
        <ProjectName title={project.title} />
        <ProjectDescription description={project.description} />
      </div>
    </div>
  );
}
