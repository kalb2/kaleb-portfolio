import React from "react";
import Carousel from "../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight({ project }) {
  const Component = project.component;

  return (
    <div className="divide-y">
      <div className="h-3/4 flex bg-zinc-300 place-content-center">
        {/* <Carousel /> */}
        {/* <div className="group relative h-full w-full"> */}
          {/* <div className="relative h-full overflow-hidden"> */}
          {project.imageUrl ? (
             <img src={project.imageUrl} />
          ) : (
            Component && 
            <div className="flex flex-col justify-center">
            {/* <div>Interact with me</div> */}
            <Component />
            </div>
          )}
          {/* </div> */}
        {/* </div> */}
      </div>

      <div className="flex h-1/4 divide-x justify-center bg-black items-center ">
      <div className="text-6xl  text-white uppercase border-white">Try me</div>

      </div>
    </div>
  );
}
