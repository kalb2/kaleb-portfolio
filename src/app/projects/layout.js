import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";

const ProjectsLayout = ({ children }) => {
  return (
    <main>
      <TitleBar text="Projects" />
      {children}
    </main>
  );
};

export default ProjectsLayout;
