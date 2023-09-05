import ProjectRight from "@/app/components/Projects/Original/ProjectRight";
import React from "react";
import projectsData from "@/app/projectsData";

export default function ThisWebsitePage() {
  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">This Website</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-7rem)]">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="grow border-b ">
            <h1 className="custom-bg border-b"
            >
              My First Next.js Project
            </h1>
          </div>
          <div className="h-1/4 p-5 border-b sm:border-b-0">
            <p className="py-1">
              Creating this site has pushed me beyond my limits time and time
              again.
            </p>
            <p className="py-1">
              While I know it is far from perfect, I have enjoyed the entire
              process.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-basic basis-2/3">
          <ProjectRight project={projectsData[0]} />
        </div>
      </div>
    </>
  );
}
