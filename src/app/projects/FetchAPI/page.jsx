import Project from "@/app/components/Projects/Alternate/ProjectAlternate";
import SingleProject from "@/app/components/Projects/Original/SingleProject";
import projectsData from "@/app/projectsData";
import React from "react";

export default function FetchAPIPage() {
  const selectedProjectId = 6;
  const selectedProject = projectsData.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <>
      {selectedProject && (
        <SingleProject key={selectedProject.id} project={selectedProject} />
      )}
    </>
  );
}
