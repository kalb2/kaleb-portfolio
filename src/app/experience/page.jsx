import Card from "../components/Card/Card";
import CardRow from "../components/CardRow";
import TitleBar from "../components/TitleBar";


export default function ExperiencePage() {
  return (
    <>
      <TitleBar text="Experience" />
      <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 bg-gray-300 p-4">
        <TabNavigation />
      </div>
      <div className="w-full sm:w-1/2 bg-gray-400 p-4">
        {/* Content for the second block */}
      </div>
    </div>
    </>
  );
}
