"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";
import ProjectName from "../Projects/Original/ProjectName";
import ProjectDescription from "../Projects/Original/ProjectDescription";
import { H1, H2, H3 } from "@/app/styles/components";
import GithubLink from "../GithubLink/GithubLink";

function TabNavigation({ tabs, project }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabTitles = ["Explanation", "Concepts", "See the code"];

  return (
    <div className="flex flex-col border-b bg-white sm:border-0">
      <div className="flex flex-col basis-1/2 ">
        <div className="h-14 flex flex-row border-b">
          <div className="flex grow items-center border-r pl-3">
            <h2>Project</h2>
          </div>
          <div className="flex items-center px-4">
            <h2>{project.title}</h2>
          </div>
        </div>
        <div>
          <h3 className="custom-bg border-b pl-3">{project.description}</h3>
        </div>
        <div className="flex flex-col items-center justify-center grow p-3 gap-2">
          <GithubLink href={project.repoUrl} />
        </div>
      </div>
      <div className="basis-1/2 bg-white ">
        <div className="flex items-end divide-x border-t">
          {tabTitles.map((title, index) => (
            <div
              key={index}
              className={`flex flex-1 cursor-pointer px-1 md:px-2 lg:px-4 py-2  ${
                activeTab === index
                  ? "bg-white font-bold uppercase text-black"
                  : "bg-black uppercase text-white "
              }`}
              onClick={() => handleTabClick(index)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className=" p-6">
          <TabContent activeTab={activeTab} tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default TabNavigation;
