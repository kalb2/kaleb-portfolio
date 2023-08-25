import React from "react";
import Carousel from "../Carousel/Carousel";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

export default function ProjectRight() {
  return (
    <div className="divide-y">
      <div className="h-2/3">
        <Carousel />
      </div>

      <div className="flex h-1/3 divide-x">
        <ProjectName />
        <ProjectDescription />
      </div>
    </div>
  );
}
