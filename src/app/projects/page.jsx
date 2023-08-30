import Project from "../components/Project";
import projectsData from "../projectsData";
import TitleBar from "../components/TitleBar/TitleBar";
import SectionBreak from "../components/SectionBreak/SectionBreak";
import kjlogoonly from "../assets/LOGO ONLY.svg";
import Image from "next/image";
import Link from "next/link";
import RefForm from "./components/BasicForm/RefForm";

export default function ProjectsPage() {
  return (
    <>
      <TitleBar text="Projects" />
      {/* <SectionBreak /> */}
      <div className="sm:grid grid-flow-row divide-x grid-cols-[1fr_2fr_repeat(3,_1fr)] w-screen grid-rows-[6fr_1fr_3fr] h-[calc(100vh-7.5rem)] border-b">
        <div className="order-1 row-span-1 col-span-1 border-b "></div>
        <div className="row-span-1 order-2 col-span-2 border-b ">
          <RefForm />
        </div>
        <div className="row-span-2 order-3 col-span-1 sm:flex items-end hidden">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-20 border-r border-t p-1 "
          />
        </div>
        <div className="row-span-3 order-4 col-span-1 "></div>
        <div className="row-span-2 order-5 col-span-1 "></div>
        <div className="row-span-1 order-6 col-span-2 flex items-center">
          <Link href="/projects/ThisWebsite">
            <p className="text-4xl font-light pl-4 after:content-['_↗'] after:text-6xl ">
              This Website{" "}
            </p>
          </Link>
        </div>
        <div className="row-span-1 order-7 col-span-3 border-t">
          <div className="p-10 flex flex-col h-full gap-3">
            <div>
              <p>
                Creating this has been a challenge all along the way, but I
                wouldn't trade the experience of teaching myself Next.js and
                React fundamentals.{" "}
              </p>
            </div>
            <div className="flex gap-5 flex-wrap">
              <ul className=" font-bold uppercase">Concepts used:</ul>
              <li>List items</li>
              <li>List items</li>
              <li>List items</li>
              <li>List items</li>
              <li>List items</li>
              <li>List items</li>
              <li>List items</li>
            </div>
          </div>
        </div>
      </div>
      <SectionBreak />
      <div className="grid grid-flow-row divide-x grid-cols-[repeat(3,_1fr)_2fr_1fr] w-screen grid-rows-[6fr_1fr_3fr] h-[calc(100vh-7.5rem)] border-b">
        <div className="order-4 row-span-1 col-span-1 border-b border-l "></div>
        <div className="row-span-1 order-3 col-span-2 border-b border-l ">
          Background
        </div>
        <div className="row-span-2 order-2 col-span-1 flex items-end justify-end ">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-20 border-l border-t p-1 "
          />
        </div>
        <div className="row-span-3 order-1 col-span-1 "></div>
        <div className="row-span-3 order-6 col-span-1 "></div>
        <div className="row-span-1 order-5 col-span-2 flex items-center border-r ">
          <Link href="/">
            <p className="text-4xl font-light pl-4 after:content-['_↗'] after:text-6xl">
              Basic Blog
            </p>
          </Link>
        </div>
        <div className="row-span-1 order-7 col-span-3 border-t">
          <div className="p-10">
            <p>Description</p>
          </div>
        </div>
      </div>
      <SectionBreak />
      <div className="grid grid-flow-row divide-x grid-cols-[1fr_2fr_repeat(3,_1fr)] w-screen grid-rows-[6fr_1fr_3fr] h-[calc(100vh-7.5rem)] border-b">
        <div className="order-1 row-span-1 col-span-1 border-b  "></div>
        <div className="row-span-1 order-2 col-span-2 border-b ">
          Background
        </div>
        <div className="row-span-2 order-3 col-span-1 flex items-end ">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-20 border-r border-t p-1 "
          />
        </div>
        <div className="row-span-3 order-4 col-span-1 "></div>
        <div className="row-span-2 order-5 col-span-1 "></div>
        <div className="row-span-1 order-6 col-span-2 flex items-center">
          <Link href="/">
            <p className="text-4xl font-light pl-4 after:content-['_↗'] after:text-6xl">
              Forms
            </p>
          </Link>
        </div>
        <div className="row-span-1 order-7 col-span-3 border-t">
          <div className="p-10">
            <p>Description</p>
          </div>
        </div>
      </div>
      <SectionBreak />
    </>
  );
}
