import ProjectRight from "../components/Projects/ProjectRight";
import TabNavigation from "../components/Tabs/TabNavigation";
import SectionBreak from "../components/SectionBreak";
import SingleProject from "../components/Projects/SingleProject";
import WhiteTitleBar from "../components/TitleBar/WhiteTitleBar";

export default function ProjectsPage() {
  return (
    <>
      <SingleProject />
      <SectionBreak />
      <WhiteTitleBar text="My Portfolio" />
      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
        <ProjectRight />
        <TabNavigation />
      </div>
    </>
  );
}
