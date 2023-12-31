import SingleProject from "@/app/components/Projects/Original/SingleProject";
import projectsData from "@/app/projectsData";

export default function BasicFetchRequestPage() {
  const selectedProjectId = 7;
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
