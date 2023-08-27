import React from "react";
import Carousel from "../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight({ project }) {
  const Component = project.component;

  return (
    <div className="flex flex-col divide-y">
      <div className="flex h-3/4 items-start justify-center bg-white pt-5">
        {/* <Carousel /> */}

        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : (
          Component && (
            <div className="flex flex-col justify-items-center p-5 font-sans">
              <Component />
            </div>
          )
        )}
      </div>

      <div className="flex h-1/4 items-center justify-center divide-x bg-black ">
        <div className="border-white  text-6xl uppercase text-white">
          Try me
        </div>
      </div>
    </div>
  );
}
