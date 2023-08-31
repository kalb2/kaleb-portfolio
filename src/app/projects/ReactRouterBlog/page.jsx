import GithubLink from "@/app/components/GithubLink/GithubLink";
import ProjectRight from "@/app/components/Projects/Alternate/ProjectRightAlternate";
import projectsData from "@/app/projectsData";
import { H1 } from "@/app/styles/components";
import React from "react";

const repoUrl =
  "https://github.com/kalb2/Basic-Blog-Project/tree/9f7e86b65a09412e738bf2c10f80bedb4fc79b85/after/client";

export default function ReactRouterBlogPage() {
  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">Projects</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row h-[calc(100vh-7rem)]">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="grow border-b ">
            <H1>Basic Blog w/ React Router</H1>
            <div className="flex flex-col justify-center items-center grow p-3 gap-2">
              <a
                href="https://cosmic-entremet-92551b.netlify.app"
                target="_blank"
              >
                <button className="bg-black text-white">View on Netlify</button>
              </a>
              <GithubLink href={repoUrl} />
            </div>
          </div>
          <div className=" p-5 border-b sm:border-b-0">
            <p className="py-1">
              Using a JSON Server, I created a basic blog that allows users to
              create new posts, update current ones, and search posts.
            </p>
            <p className="pt-3">
              Note - In production, this uses a small JSON Server database, so
              data changed will not persist.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-basic basis-2/3 "> */}
        <ProjectRight project={projectsData[13]} />
        {/* </div> */}
      </div>
    </>
  );
}
