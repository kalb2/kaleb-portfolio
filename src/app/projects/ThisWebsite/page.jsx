import React from "react";
import projectsData from "@/app/projectsData";
import ProjectRight from "@/app/components/Projects/Original/ProjectRight";
import GithubLink from "@/app/components/GithubLink/GithubLink";
import SectionBreak from "@/app/components/SectionBreak/SectionBreak";
import Image from "next/image";

export default function ThisWebsitePage() {
  const project = projectsData[0];

  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">This Website</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-7rem)] border-b">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="flex flex-col grow border-b ">
            <h3 className="custom-bg border-b">
              My First Next.js Project - creating a website from scratch with
              React and TailwindCSS.
            </h3>
            <div className="flex flex-col items-center justify-end grow p-3 gap-2">
              <GithubLink href={project.repoUrl} />
            </div>
          </div>
          <div className="h-1/4 p-5 border-b sm:border-b-0">
            <p className="py-1">
              Creating this site has pushed me beyond my limits time and time
              again.
            </p>
            <p className="py-1">
              This site is inspired by the <a href="https://www.nikecirculardesign.com/" className="underline after:content-['_↗'] after:text-3xl">
                Nike Circular Design Website
                </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-basic basis-2/3">
          <div className="h-full flex bg-black place-content-center relative">
            <Image
              src={project.imageUrl}
              alt="This Website"
              width={1000}
              height={500}
              className=" object-contain"
            />
          </div>
        </div>
      </div>
      <SectionBreak />
      <div className="flex flex-col md:flex-row h-[calc(100vh-3.25rem)] w-screen">
        <div className="flex flex-col h-full basis-1/4 items-center">
          <div className=" border-b border-r border-l">
            <img src={project.bgimage} className="w-full h-full" />
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
            <li>
              I chose Next.js as a framework to give me the flexibility to grow
              this site to include anything I want in the future. For example, a
              blog or other projects.
            </li>
            <li>
              With my experience in React, using Next.js to create this
              portfolio was a seamless transition.
            </li>
            <li>
              Tailwind became my choice for styling the majority of this site.
              It was my first introduction, but I quickly became a fan.
            </li>
            <li>
              There is still a learning curve with Next.js, but utilizing things
              like the App Router and Server-Side Rendering will hopefully help
              me create a powerful website for my personal use.
            </li>
            <li className="break-inside-avoid-column">
              I use Vercel to deploy my site on my custom domain. It allows me
              to monitor speed, and errors as I continue to learn Next.js and
              React.
            </li>
            <li>
              With my experience in React, using Next.js to create this
              portfolio was a seamless transition.
            </li>
            <li>
              Tailwind became my choice for styling the majority of this site.
              It was my first introduction, but I quickly became a fan.
            </li>
            <li>
              I use Vercel to deploy my site on my custom domain. It allows me
              to monitor speed, and errors as I continue to learn Next.js and
              React.
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
