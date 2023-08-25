"use client";
import { TabContentProvider } from "../components/Tabs/TabContentContext";
import SectionBreak from "../components/SectionBreak";
import SingleProject from "../components/Projects/SingleProject";

const project1TabContentData = [
  { tabName: "Tab 1", content: "Content for Tab 1 - Project 1" },
  { tabName: "Tab 2", content: "I've created a bunch of random content" },
  { tabName: "Tab 3", content: "Content for Tab 3 - Project 1" },
];

const project2TabContentData = [
  { tabName: "Tab 1", content: "Content for Tab 1 - Project 2" },
  { tabName: "Tab 2", content: "Content for Tab 2 - Project 2" },
  { tabName: "Tab 3", content: "Content for Tab 3 - Project 2" },
];

export default function ProjectsPage() {
  return (
    <>
      <TabContentProvider>
        <SingleProject
          title="Project 1"
          tabContentData={project1TabContentData}
        />
      </TabContentProvider>
      <SectionBreak />
      <TabContentProvider>
        <SingleProject
          title="Project 2"
          tabContentData={project2TabContentData}
        />
      </TabContentProvider>

      {/* <WhiteTitleBar text="My Portfolio" />
      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
        <ProjectRight />
        <TabNavigation />
      </div> */}
    </>
  );
}
