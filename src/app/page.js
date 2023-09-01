import Card from "./components/Card/Card";
import CardRow from "./components/Card/CardRow";
import IntroGrid from "./components/IntroGrid/IntroGrid";
import SectionBreak from "./components/SectionBreak/SectionBreak";
import TitleBar from "./components/TitleBar/TitleBar";
import WhiteTitleBar from "./components/TitleBar/WhiteTitleBar";
import code from "../../public/Code.png";
import oladipo from "../../public/OladipoProject.png";
import RouterBlog from "../../public/RouterBlog.png";
import Forms from "../../public/Forms.png";
import projectsData from "./projectsData";

export default function Home({ bgimage }) {
  let counter = 1; 

  return (
    <>
      <IntroGrid />
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <CardRow>
      {projectsData.map((project, index) => {
          if (project.href) {
            const text = counter.toString().padStart(3, '0');
            counter++; 
            return (
              <Card
                key={project.id}
                text={text}
                title={project.title}
                href={`/projects/${project.href}`}
                bgimage={project.bgimage}
              />
            );
          }
          return null;
        })}
      </CardRow>
    </>
  );
}
