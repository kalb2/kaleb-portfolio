import React from "react";
import TitleBar from "@/app/components/TitleBar/TitleBar";
import projectsData from "@/app/projectsData";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default  function ProjectsPage({params}) {
  const { id } = params


  return (
    <div>
      <TitleBar text="About Me" />
      {id}
      {/* {project} */}
      {/* {project.title} */}
    </div>
  );
}