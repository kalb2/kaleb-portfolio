import Image from "next/image";
import Link from "next/link";
import React from "react";
import kjlogoonly from "../../../assets/LOGO ONLY.svg";
import Concepts from "../../Content/Concepts";

export default function OverviewFlipped({ project, text }) {
  const Component = project.component;

  return (
    <div className="grid grid-flow-row divide-x grid-cols-[repeat(3,_1fr)_2fr_1fr] w-full grid-rows-[6fr_1fr_3fr] h-[calc(100vh-3.5rem)] border-b">
      <div className="order-4 row-span-1 col-span-1 hidden sm:block border-b border-l "></div>
      <div className="row-span-1 order-3 col-span-5 sm:col-span-2 border-b border-l bg-neutral-50">
        {project.displayComponent ? (
          <div className="flex flex-col max-h-[60vh] justify-center items-center p-5 font-sans">
            <Component />
          </div>
        ) : (
          <Link href={`/projects/${project.href}`}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
          </Link>
        )}
      </div>
      <div className="row-span-2 order-5 sm:order-2 col-span-1 flex items-end justify-end">
        {/* <Image
          src={kjlogoonly}
          alt="My Logo"
          className="w-20 border-l border-t p-1 "
        /> */}
        <div className="sm:border-l border-t w-full sm:w-auto ">
          <h1 className="text-end">{text}</h1>
        </div>
      </div>
      <div className="row-span-3 order-1 col-span-1 hidden sm:block "></div>
      <div className="row-span-2 order-6 col-span-1 hidden sm:block"></div>
      <div className="row-span-1 order-6 sm:order-5 sm:col-span-2 col-span-4 flex items-center border-r">
        <Link href={`/projects/${project.href}`}>
          <h4 className=" pl-4 after:content-['_↗'] after:text-4xl sm:after:text-6xl ">
            {project.title}
          </h4>
        </Link>
      </div>
      <div className="row-span-1 order-7 sm:col-span-3 col-span-4 border-t">
        <div className="p-3 md:p-5 flex flex-col md:flex-row h-full gap-3 md:gap-5 ">
          <div className="md:w-2/3">
            <p className="md:text-xl">{project.description}</p>
          </div>
          <Concepts project={project} />
        </div>
      </div>
    </div>
  );
}
