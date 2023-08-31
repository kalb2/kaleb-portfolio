"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";
import ProjectName from "../Projects/ProjectName";
import ProjectDescription from "../Projects/ProjectDescription";
import { H1, H3 } from "@/app/styles/components";

function TabNavigation({ tabs, project }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabTitles = ["What I", "Concepts Used", "See the code"];

  return (
    <div className="border-b bg-white sm:border-0">
      <div className="grid h-1/3 grid-cols-3 grid-rows-4">
        <div className="flex items-center border-b border-r pl-3 uppercase text-2xl font-light">
          Project
        </div>
        <div className="col-span-2 flex items-center border-b pl-3 uppercase text-xl lg:text-2xl font-light">
          {project.title}
        </div>
        <div className="row-span-3 border-r"></div>
        <div className="col-span-2 row-span-3 text-2xl sm:text-4xl ">
          <p
            // className="leading-8 text-black uppercase"
            // style={{
            //   backgroundImage:
            //     "repeating-linear-gradient(180deg, transparent, transparent 31.5px, #000 32.5px)",
            // }}
          >
           {project.description}
          </p>
        </div>
      </div>
      <div className="h-2/3 bg-white ">
        <div className="flex items-end divide-x border-t">
          {tabTitles.map((title, index) => (
            <div
              key={index}
              className={`flex flex-1 cursor-pointer px-4 py-2  ${
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
