import Card from "./components/Card/Card";
import CardRow from "./components/CardRow";
import IntroGrid from "./components/IntroGrid";
import SectionBreak from "./components/SectionBreak";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <>
      <IntroGrid />
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <CardRow>
        <Card text="001" title="This Website" />
        <Card text="002" title="Baby-Elo" />
        <Card text="003" title="Daily React" />
      </CardRow>
      <TitleBar text="Recent Projects" />
    </>
  );
}
