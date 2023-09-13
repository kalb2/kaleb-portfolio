import Image from "next/image";
import Link from "next/link";
import React from "react";
import kjlogoonly from "../../../assets/LOGO ONLY.svg";
import Concepts from "../../Content/Concepts";

export default function Overview({ project, text }) {
  const Component = project.component;

  return (
    <div className="sm:grid-flow-row grid divide-x grid-cols-[1fr_2fr_repeat(3,_1fr)] w-full grid-rows-[6fr_1fr_3fr] h-[calc(100vh-3.5rem)] border-b">
      <div className="order-1 row-span-1 hidden sm:block col-span-1 border-b "></div>
      <div className="row-span-1 order-2 col-span-5 sm:col-span-2 border-b bg-neutral-50">
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
      <div className="row-span-2 order-7 sm:order-3 col-span-1 flex items-end ">
        {/* <Image
          src={kjlogoonly}
          alt="My Logo"
          className="w-20 border-r border-t p-1 "
        /> */}
        <div className="sm:border-r border-t w-full sm:w-auto">
          <h1>{text}</h1>
        </div>
      </div>
      <div className="row-span-3 order-4 col-span-1 hidden sm:block "></div>
      <div className="row-span-2 order-5 col-span-1 hidden sm:block "></div>
      <div className="row-span-1 order-6 sm:col-span-2 col-span-4 flex items-center">
        <Link href={`/projects/${project.href}`}>
          <h4 className=" pl-4 after:content-['_↗'] after:text-4xl sm:after:text-6xl ">
            {project.title}
          </h4>
        </Link>
      </div>
      <div className="row-span-1 order-7 sm:col-span-3 col-span-4 border-t">
        <div className="flex flex-col md:flex-row h-full p-3 md:p-5 gap-3 md:gap-5">
          <div className="md:w-2/3">
          <p className="md:text-xl">{project.description}</p>
          </div>
          <Concepts project={project} />
        </div>
      </div>
    </div>
  );
}
