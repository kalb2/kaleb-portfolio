import Project from "@/app/components/ProjectAlternate";
import projectsData from "@/app/projectsData";
import React from "react";

export default function BasicFetchRequestPage() {
  const selectedProjectId = 9;
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