import React from "react";
import TabNavigation from "../components/Tabs/TabNavigation";
import ProjectRight from "./Projects/ProjectRight";
import SectionBreak from "./SectionBreak";

function Project({ project, order }) {
  return (
    <>
      <div className="flex w-full border-b border-b-black bg-white p-1 text-black">
        <h1 className="text-6xl uppercase tracking-widest">{project.title}</h1>
      </div>

      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b">
      {order === 1 ? (
          <>
            <TabNavigation tabs={project.tabs} />
            <ProjectRight project={project} />
          </>
        ) : (
          <>
            <ProjectRight project={project} />
            <TabNavigation tabs={project.tabs} />
          </>
        )}
      </div>

      <SectionBreak />
    </>
  );
}

export default Project;
