import React from "react";
import TabNavigation from "../components/Tabs/TabNavigation";
import ProjectRight from "./Projects/ProjectRight";

function Project({ project }) {
  return (
    <>
      <div className="flex w-full border-b border-b-black bg-white p-1 text-black">
        <h1 className="text-6xl uppercase tracking-widest">{project.title}</h1>
      </div>

      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
        <TabNavigation tabs={project.tabs} />
        <ProjectRight project={project} />
      </div>
    </>
  );
}

export default Project;
