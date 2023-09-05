import Project from "../components/Projects/Original/Project";
import projectsData from "../projectsData";
import TitleBar from "../components/TitleBar/TitleBar";
import SectionBreak from "../components/SectionBreak/SectionBreak";
import kjlogoonly from "../assets/LOGO ONLY.svg";
import Image from "next/image";
import Link from "next/link";
import RefForm from "../components/projectcomponents/BasicForm/RefForm";
import Overview from "../components/Projects/Overviews/Overview";
import OverviewFlipped from "../components/Projects/Overviews/OverviewFlipped";
import ProjectNavigation from "../components/ProjectsNav/ProjectNavigation";

export default function ProjectsPage() {
  let counter = 1; 

  return (
    <>
      <TitleBar text="Projects" />
      {/* <ProjectNavigation projects={projectsData} /> */}

      {projectsData
        .filter((project) => !project.shouldExclude)
        .map((project) => {
          const layout = project.id % 2 === 0 ? "normal" : "flipped";
          const text = counter.toString().padStart(3, '0');
            counter++; 
          return (
            <div key={project.id} id={project.id} >
              {layout === "normal" ? (
                <OverviewFlipped project={project} text={text}  />
              ) : (
                <Overview project={project} text={text} />
              )}
              <SectionBreak />
            </div>
          );
        })}
    </>
  );
}
