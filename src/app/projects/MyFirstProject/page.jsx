import ProjectRight from "@/app/components/Projects/Alternate/ProjectRightAlternate";
import projectsData from "@/app/projectsData";
import { H1 } from "@/app/styles/components";
import React from "react";

export default function MyFirstProjectPage() {
  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">Projects</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row h-[calc(100vh-7rem)]">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="grow border-b ">
            <H1>My First React Project</H1>
            <div className="flex justify-center grow p-3">
              <a
                href="https://prismatic-zuccutto-df4443.netlify.app/"
                target="_blank"
              >
                <button className="bg-black text-white">View on Netlify</button>
              </a>
            </div>
          </div>
          <div className=" p-5 border-b sm:border-b-0">
            <p className="py-1">
              With no experience with JavaScript, React, or MaterialUI I created
              this player bio dashboard.
            </p>
            <p className="py-5">
              Using MaterialUI I learned about mapping data from a JSON file to
              React components.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-basic basis-2/3 "> */}
        <ProjectRight
          project={projectsData.find((project) => project.id === 16)}
        />
        {/* </div> */}
      </div>
    </>
  );
}
