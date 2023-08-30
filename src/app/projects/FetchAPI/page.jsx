import Project from "@/app/components/ProjectAlternate";
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
        <Project key={selectedProject.id} project={selectedProject} />
      )}
    </>
  );
}
