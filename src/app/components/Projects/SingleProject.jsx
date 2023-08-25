import React from "react";
import TabNavigation from "./TabNavigation";
import ProjectRight from "./ProjectRight";
import WhiteTitleBar from "../TitleBar/WhiteTitleBar";

export default function SingleProject() {
  return (
    <>
      <WhiteTitleBar text="My Portfolio" />
      <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
        <TabNavigation />
        <ProjectRight />
      </div>
    </>
  );
}
