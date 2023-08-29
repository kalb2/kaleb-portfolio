import Card from "./components/Card/Card";
import CardRow from "./components/Card/CardRow";
import IntroGrid from "./components/IntroGrid/IntroGrid";
import SectionBreak from "./components/SectionBreak/SectionBreak";
import TitleBar from "./components/TitleBar/TitleBar";

export default function Home() {
  return (
    <>
      <IntroGrid />
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <CardRow>
        <Card text="001" title="Basic useState" href="/projects/BasicUseStateProjects" />
        <Card text="001" title="This Website" href="/" />
        <Card text="001" title="This Website" href="/" />
        {/* <Card text="002" title="Baby-Elo" />
        <Card text="003" title="Daily React" /> */}
      </CardRow>
      <TitleBar text="Recent Projects" />
    </>
  );
}
