import ProjectRight from "../components/Projects/ProjectRight";
import TabNavigation from "../components/Tabs/TabNavigation";
import SectionBreak from "../components/SectionBreak";
import SingleProject from "../components/Projects/SingleProject";
import WhiteTitleBar from "../components/TitleBar/WhiteTitleBar";
import Project from "../components/Project";
import projectsData from "../projectsData";

export default function ProjectsPage() {
  return (
    <>
    {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
      {/* <SingleProject />
      <SectionBreak />
      <WhiteTitleBar text="My Portfolio" />
      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
        <ProjectRight />
        <TabNavigation />
      </div> */}
    </>
  );
}
