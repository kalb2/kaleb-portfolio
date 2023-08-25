import Card from "../components/Card/Card";
import CardRow from "../components/CardRow";
import ProjectRight from "../components/Projects/ProjectRight";
import SingleProject from "../components/Projects/SingleProject";
import TabNavigation from "../components/Projects/TabNavigation";
import TitleBar from "../components/TitleBar/TitleBar";

export default function ExperiencePage() {
  return (
    <>
      <TitleBar text="Experience" />
      <SingleProject />
    </>
  );
}
