import React from "react";
import Image from "next/image";
import kjlogoonly from "../../assets/LOGO ONLY.svg";
import TitleBar from "../TitleBar/TitleBar2";
import { H1, H2, H3, H4, P } from "../../styles/components";
import WhiteTitleBar from "../TitleBar/WhiteTitleBar";

export default function IntroGrid() {
  return (
    <>
      <TitleBar text="Welcome" />
      <div className="grid h-[calc(100vh-7.0625rem)] md:h-[calc(100vh-6.14rem)] lg:h-[calc(100vh-8.25rem)] xl:h-[calc(100vh-10.125rem)] grid-cols-[1fr_3fr_2fr] grid-rows-[1fr_auto] ">
        <div className="sm:row-span-2 border-b border-r row-span-1"></div>
        <div className="border-b border-r"></div>
        <div className="border-b"></div>
        <div className="border-b border-r col-span-2 sm:col-span-1">
          <h1 className="custom-bg">Self-Taught <br/> Front-End Dev <br/> Hire me</h1>
        </div>
        <div className="flex border-b p-5 justify-center ">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-3/4  "
          />
        </div>
      </div>
    </>
  );
}
