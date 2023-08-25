import React from "react";
import Image from "next/image";
import kjlogo from "../assets/KJ-Logo.svg";
import kjlogoonly from "../assets/LOGO ONLY.svg";
import TitleBar from "./TitleBar/TitleBar";

export default function IntroGrid() {
  return (
    <>
      <TitleBar text="Welcome" />
      <div className="grid h-80 grid-cols-3 grid-rows-2">
        <div className="row-span-2 border-b border-r"></div>
        <div className="border-b border-r"></div>
        <div className="border-b"></div>
        <div className="border-b border-r">
          <h2 className="text-2xl uppercase sm:text-4xl lg:text-5xl">
            A Front-end
            <hr /> Dev by <hr />
            trade
          </h2>
        </div>
        <div className="flex border-b p-5 ">
          <Image src={kjlogoonly} alt="My Logo" className="w-full " />
        </div>
      </div>
    </>
  );
}
