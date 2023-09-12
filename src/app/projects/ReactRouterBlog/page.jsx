import GithubLink from "@/app/components/GithubLink/GithubLink";
import ProjectRight from "@/app/components/Projects/Alternate/ProjectRightAlternate";
import SectionBreak from "@/app/components/SectionBreak/SectionBreak";
import projectsData from "@/app/projectsData";
import { H1 } from "@/app/styles/components";
import Image from "next/image";
import React from "react";

export default function ReactRouterBlogPage() {
  const project = projectsData[1];

  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b ">
        <div className="flex items-center px-3 grow">{project.title}</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-6.75rem)] border-b">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="flex flex-col grow border-b ">
            <h3 className="custom-bg border-b">{project.tagline}</h3>
            <div className="flex flex-col items-center justify-end grow p-3 gap-2">
              <a
                href="https://cosmic-entremet-92551b.netlify.app"
                target="_blank"
              >
                <button className="bg-black text-white">Try on Netlify</button>
              </a>
              <GithubLink href={project.repoUrl} />
            </div>
          </div>
          <div className="h-1/3 p-5 border-b sm:border-b-0">
          {project.description.map((paragraph, index) => (
              <p className="py-1 mb-5" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-basic basis-2/3">
          <div className=" flex bg-black place-content-center items-center relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1000}
                height={500}
                className=" object-contain"
              />

          </div>
        </div>
      </div>
      <SectionBreak />
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-7rem)] ">
        <div className="flex flex-col basis-1/4 items-center ">
          <div className=" border-b border-r border-l">
            <img
              src={project.bgimage}
              className="w-full h-full"
              alt={project.title}
            />
          </div>
          <div className="h-full border-r"></div>
        </div>
        <div className="flex flex-col basis-3/4">
          <div className="flex flex-row w-full divide-x h-1/6 border-b">
            <div className="w-full"></div>
            <div className="w-full"></div>
          </div>
          <div className="w-full border-b h-14 flex items-center pl-4">
            <h2>About this project</h2>
          </div>
          <div className="p-10 h-full gap-5 space-y-8 md:space-y-10 w-full columns-1 md:columns-2 break-inside-avoid-column">
            {project.about.map((item, index) => (
              <li key={index} className="break-inside-avoid-column md:text-xl">
                {item}
              </li>
            ))}
            <h2>Concepts used</h2>
            {project.conceptsUsed.map((item, index) => (
              <li key={index} className="break-inside-avoid-column md:text-xl">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
