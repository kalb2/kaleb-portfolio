import React from "react";
import Carousel from "../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight() {
  return (
    <div className="w-full divide-y md:w-1/2 ">
      <div className="h-3/4">
        <Carousel />
      </div>

      <div className="flex h-1/4 divide-x">
        <ProjectName />
        <ProjectDescription />
      </div>
    </div>
  );
}
