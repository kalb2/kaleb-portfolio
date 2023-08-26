import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import Project from "../components/Project";
import projectsData from "../projectsData";

export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
