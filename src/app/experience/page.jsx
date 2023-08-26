import Card from "../components/Card/Card";
import CardRow from "../components/Card/CardRow";
import Project from "../components/ProjectAlternate";
import ProjectRight from "../components/Projects/ProjectRight";
import SingleProject from "../components/Projects/SingleProject";
import TabNavigation from "../components/Tabs/TabNavigation";
import TitleBar from "../components/TitleBar/TitleBar";
import projectsData from "../projectsData";

export default function ExperiencePage() {
  return (
    <>
      <TitleBar text="Experience" />
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
