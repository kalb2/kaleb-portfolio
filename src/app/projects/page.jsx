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
      <Overview project={projectsData[0]} />
      <SectionBreak />
      <OverviewFlipped project={projectsData[1]} />
      <SectionBreak />
      <Overview project={projectsData[2]} />
      <SectionBreak />
    </>
  );
}
