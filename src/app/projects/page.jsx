import ProjectRight from "../components/Projects/ProjectRight";
import TabNavigation from "../components/Tabs/TabNavigation";
import SectionBreak from "../components/SectionBreak/SectionBreak";
import SingleProject from "../components/Projects/SingleProject";
import WhiteTitleBar from "../components/TitleBar/WhiteTitleBar";
import Project from "../components/Project";
import projectsData from "../projectsData";
import TitleBar from "../components/TitleBar/TitleBar";

export default function ProjectsPage() {
  return (
    <>
      <TitleBar text="Projects" />
      <SectionBreak />
      {projectsData.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          order={index % 2 === 0 ? 1 : 2}
        />
      ))}
    </>
  );
}
