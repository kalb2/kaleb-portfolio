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

export default function ProjectsPage() {
  return (
    <>
      <TitleBar text="Projects" />
      {projectsData
        .filter((project) => !project.shouldExclude)
        .map((project) => {
          const layout = project.id % 2 === 0 ? "normal" : "flipped";

          return (
            <div key={project.id}>
              {layout === "normal" ? (
                <OverviewFlipped project={project} />
              ) : (
                <Overview project={project} />
              )}
              <SectionBreak />
            </div>
          );
        })}
    </>
  );
}
