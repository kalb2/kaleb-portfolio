import React from "react";
import Image from "next/image";
import kjlogoonly from "../../assets/LOGO ONLY.svg";
import TitleBar from "../TitleBar/TitleBar";

export default function IntroGrid() {
  return (
    <>
      <TitleBar text="Welcome" />
      <div className="grid h-[calc(100vh-7.5rem)] grid-cols-[1fr_3fr_2fr] grid-rows-[1fr_auto] ">
        <div className="row-span-2 border-b border-r"></div>
        <div className="border-b border-r"></div>
        <div className="border-b"></div>
        <div className="border-b border-r">
          <p
            className="text-4xl uppercase sm:text-5xl lg:text-6xl"
            style={{
              backgroundImage:
                // "repeating-linear-gradient(180deg, transparent, transparent 47px, #000 47.5px, #000 48.5px)",
                "repeating-linear-gradient(180deg, transparent, transparent 59px, #000 59.5px, #000 60.5px)",
            }}
          >
            A Front-end <br />
            Dev by <br /> trade
          </p>
        </div>
        <div className="flex border-b p-5 justify-center ">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-full sm:w-[25%] "
          />
        </div>
      </div>
    </>
  );
}
