import React from "react";
import TabNavigation from "./Tabs/TabNavigationAlternate";
import ProjectRight from "./Projects/ProjectRightAlternate";
import SectionBreak from "./SectionBreak/SectionBreak";

function Project({ project, order }) {
  return (
    <>
      {/* <div className="flex w-full border-b border-b-black bg-white p-1 text-black">
        <h1 className="text-6xl uppercase tracking-widest">{project.title}</h1>
      </div> */}

      <div className="grid-cols-basic auto-rows-[calc(100vh-3.5rem)] grid divide-x border-b">
        {order === 1 ? (
          <>
            <TabNavigation tabs={project.tabs} project={project} />
            <ProjectRight project={project} />
          </>
        ) : (
          <>
            <ProjectRight project={project} />
            <TabNavigation tabs={project.tabs} project={project} />
          </>
        )}
      </div>

      {/* <SectionBreak /> */}
    </>
  );
}

export default Project;
