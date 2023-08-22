import Card from "./components/Card/Card";
import CardRow from "./components/CardRow";
import IntroGrid from "./components/IntroGrid";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <>
      <IntroGrid />
      <TitleBar text="Recent Projects" />
      <CardRow>
        <Card text="001" title="This Website" />
        <Card text="002" title="Title" />
        <Card text="003" title="Title" />
      </CardRow>
      <TitleBar text="Recent Projects" />
    </>
  );
}
