import React from "react";
import Image from "next/image";
import kjlogo from "../assets/KJ-Logo.svg";
import kjlogoonly from "../assets/LOGO ONLY.svg"
import TitleBar from "./TitleBar";

export default function IntroGrid() {
  return (
    <>
    <TitleBar text="Welcome" />
      <div className="grid grid-rows-2 grid-cols-3 h-80">
        <div className="row-span-2 border-r border-b"></div>
        <div className="border-r border-b"></div>
        <div className="border-b"></div>
        <div className="border-r border-b">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl uppercase">
            A Front-end
            <hr /> Dev by <hr />
            trade
          </h2>
        </div>
        <div className="border-b p-5 flex ">
          <Image src={kjlogoonly} alt="My Logo" className="w-full "/>
        </div>
      </div>
    </>
  );
}
