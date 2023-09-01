import React from "react";
import TitleBar from "../components/TitleBar/TitleBar2";
import projectsData from "../projectsData";


export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      <div className="h-[calc(100vh-7.25rem)] bg-black flex">
        <div className=" text-white text-5xl">Coming Soon...</div>
      </div>
    </div>
  );
}
