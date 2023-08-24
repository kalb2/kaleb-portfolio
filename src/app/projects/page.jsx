import ProjectRight from "../components/Projects/ProjectRight";
import TabNavigation from "../components/Projects/TabNavigation";
import CodeSnippet from "../../../public/Code.png";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-wrap divide-x border-b ">
        <TabNavigation />
        {/* <div className="flex-auto">
          <Image src={CodeSnippet} alt="code" width={500} height={"auto"} />
        </div>
        <div className="flex-1">Title</div>
        <div className="flex-1">Description</div> */}

        <ProjectRight />
      </div>
    </>
  );
}
