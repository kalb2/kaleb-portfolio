import Card from "./components/Card/Card";
import CardRow from "./components/Card/CardRow";
import IntroGrid from "./components/IntroGrid/IntroGrid";
import SectionBreak from "./components/SectionBreak/SectionBreak";
import TitleBar from "./components/TitleBar/TitleBar";
import WhiteTitleBar from "./components/TitleBar/WhiteTitleBar";


export default function Home() {
  return (
    <>
      <IntroGrid />
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <CardRow>
        <Card text="001" title="This Website" href="/projects/ThisWebsite" />
        <Card text="002" title="Basic Blog" href="/" />
        <Card text="003" title="Forms" href="/projects/Forms" />
        <Card text="004" title="Custom Hooks" href="/projects/CustomHooks" />
        <Card text="005" title="API Fetch" href="/projects/FetchAPI" />
        <Card text="006" title="Basic Fetch" href="/projects/BasicFetchRequest" />
        <Card text="007" title="Basic useState" href="/projects/BasicUseStateProjects" />
        <Card text="008" title="My 1st Project" href="/" />
        {/* <Card text="002" title="Baby-Elo" />
        <Card text="003" title="Daily React" /> */}
      </CardRow>
      {/* <WhiteTitleBar text="Recent Skills" /> */}
    </>
  );
}
