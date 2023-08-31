import Card from "./components/Card/Card";
import CardRow from "./components/Card/CardRow";
import IntroGrid from "./components/IntroGrid/IntroGrid";
import SectionBreak from "./components/SectionBreak/SectionBreak";
import TitleBar from "./components/TitleBar/TitleBar";
import WhiteTitleBar from "./components/TitleBar/WhiteTitleBar";
import code from "../../public/Code.png"
import oladipo from "../../public/OladipoProject.png"
import RouterBlog from "../../public/RouterBlog.png"
import Forms from "../../public/Forms.png"


export default function Home({bgimage}) {
  return (
    <>
      <IntroGrid />
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <CardRow>
        <Card text="001" title="This Website" href="/projects/ThisWebsite" bgimage={code.src} />
        <Card text="002" title="ReactRouter Blog" href="/projects/ReactRouterBlog" bgimage={RouterBlog.src} />
        <Card text="003" title="Forms" href="/projects/Forms" bgimage={Forms.src} />
        <Card text="004" title="Custom Hooks" href="/projects/CustomHooks" />
        <Card text="005" title="API Fetch" href="/projects/FetchAPI" />
        <Card text="006" title="Basic Fetch" href="/projects/BasicFetchRequest" />
        <Card text="007" title="Basic useState" href="/projects/BasicUseStateProjects" />
        <Card text="008" title="My 1st Project" href="projects/MyFirstProject" bgimage={oladipo.src} />
        {/* <Card text="002" title="Baby-Elo" />
        <Card text="003" title="Daily React" /> */}
      </CardRow>
      {/* <WhiteTitleBar text="Recent Skills" /> */}
    </>
  );
}
