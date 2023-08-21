import Card from "../components/Card/Card";
import CardRow from "../components/CardRow";
import TitleBar from "../components/TitleBar";

export default function ProjectsPage() {
  return (
    <>
      <TitleBar text="Projects" />
      <CardRow>
        <Card text="hello" title="Title" />
        <Card text="hello" title="Title" />
      </CardRow>
    </>
  );
}
