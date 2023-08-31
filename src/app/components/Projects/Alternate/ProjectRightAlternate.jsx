import React from "react";
import Carousel from "../../Carousel/Carousel";
import ProjectName from "../Original/ProjectName";
import ProjectDescription from "../Original/ProjectDescription";

export default function ProjectRight({ project }) {
  const Component = project.component;

  return (
    <div className="flex flex-col w-full divide-y">
      <div className="flex h-3/4 items-start justify-center bg-neutral-100 pt-5 overflow-clip">
        {/* <Carousel /> */}

        {project.imageUrl ? (
          <div className="flex flex-col justify-items-center p-5">
            <img src={project.imageUrl} alt={project.title} />
          </div>
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
