import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import ProjectRight from "../components/Projects/Original/ProjectRight";
import TabNavigation from "../components/Tabs/TabNavigation";
import projectsData from "../projectsData";
import SingleProject from "../components/Projects/Original/SingleProject";

export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      <div className="grid-cols-basic auto-rows-[calc(100vh-3.5rem)] grid divide-x border-b">
        <ProjectRight project={projectsData[1]} />
        <TabNavigation project={projectsData[1]} tabs={projectsData[1].tabs} />
      </div>
    </div>
  );
}
