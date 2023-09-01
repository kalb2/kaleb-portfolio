import Image from "next/image";
import Link from "next/link";
import React from "react";
import kjlogoonly from "../../../assets/LOGO ONLY.svg";
import Concepts from "../../Content/Concepts";

export default function OverviewFlipped({ project }) {
  return (
    <div className="grid grid-flow-row divide-x grid-cols-[repeat(3,_1fr)_2fr_1fr] w-screen grid-rows-[6fr_1fr_3fr] h-[calc(100vh-7.5rem)] border-b">
      <div className="order-4 row-span-1 col-span-1 hidden sm:block border-b border-l "></div>
      <div className="row-span-1 order-3 col-span-5 sm:col-span-2 border-b border-l">
        {project.displayComponent ? (
          <Component />
        ) : (
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${project.bgimage})`,
              backgroundSize: "cover",
            }}
          ></div>
        )}
      </div>
      <div className="row-span-2 order-5 sm:order-2 col-span-1 flex items-end justify-end">
        <Image
          src={kjlogoonly}
          alt="My Logo"
          className="w-20 border-l border-t p-1 "
        />
      </div>
      <div className="row-span-3 order-1 col-span-1 hidden sm:block "></div>
      <div className="row-span-2 order-6 col-span-1 hidden sm:block"></div>
      <div className="row-span-1 order-6 sm:order-5 sm:col-span-2 col-span-4 flex items-center border-r">
        <Link href={`/projects/${project.href}`}>
          <p className="text-4xl font-light pl-4 after:content-['_↗'] after:text-6xl ">
            {project.title}
          </p>
        </Link>
      </div>
      <div className="row-span-1 order-7 sm:col-span-3 col-span-4 border-t">
        <div className="p-10 flex flex-col h-full gap-3">
          <div>
            <p>{project.description}</p>
          </div>
          <Concepts project={project} />
        </div>
      </div>
    </div>
  );
}
