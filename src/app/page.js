import CardRow from "./components/CardRow";
import IntroGrid from "./components/IntroGrid";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
<>
<IntroGrid />
<TitleBar text="Recent Projects" />
<CardRow />
</>
  );
}
