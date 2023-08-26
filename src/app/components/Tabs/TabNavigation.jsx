"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";
import ProjectName from "../Projects/ProjectName";
import ProjectDescription from "../Projects/ProjectDescription";

function TabNavigation({ tabs, project }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabTitles = ["What I", "Concepts Used", "See the code"];

  return (
    <div className="border-b bg-zinc-300 sm:border-0">
      {/* <div className="flex">
      <ProjectName title={project.title} />
      <ProjectDescription description={project.description} />
      </div> */}
      <div className="flex items-end divide-x ">
        {tabTitles.map((title, index) => (
          <div
            key={index}
            className={`flex flex-1 cursor-pointer px-4 py-2  ${
              activeTab === index
                ? "bg-zinc-300 font-bold uppercase text-black"
                : "bg-black uppercase text-white "
            }`}
            onClick={() => handleTabClick(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="bg-zinc-300 p-6 ">
        <TabContent activeTab={activeTab} tabs={tabs} />
      </div>
    </div>
  );
}

export default TabNavigation;
