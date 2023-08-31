import React from "react";
import TitleBar from "@/app/components/TitleBar/TitleBar";
import projectsData from "@/app/projectsData";

// export async function generateStaticParams() {

//   return projectsData.map((project) => ({
//     id: project.id,
//   }));
// }
// export async function generateStaticParams() {
// const projects = projectsData.map((project) => ({
//     id: project.id,
//   }));
// }
// return projects

export default  function ProjectsPage({params}) {
  const { id } = params


  return (
    <div>
      <TitleBar text="About Me" />
      <div>
        {id}
        </div>
    </div>
  );
}