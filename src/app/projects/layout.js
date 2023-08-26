import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import SectionBreak from "../components/SectionBreak/SectionBreak";

const ProjectsLayout = ({ children }) => {
  return (
    <main>
      <TitleBar text="Projects" />
      <SectionBreak />
      {children}
    </main>
  );
};

export default ProjectsLayout;
