import React from "react";
import Image from "next/image";
import kjlogoonly from "../../assets/LOGO ONLY.svg";
import TitleBar from "../TitleBar/TitleBar2";
import { H1, H2, H3, H4, P } from '../../styles/components'
import WhiteTitleBar from "../TitleBar/WhiteTitleBar";


export default function IntroGrid() {
  return (
    <>
      <TitleBar text="Welcome" />
      <div className="grid h-[calc(100vh-7.5rem)] grid-cols-[1fr_3fr_2fr] grid-rows-[1fr_auto] ">
        <div className="sm:row-span-2 border-b border-r row-span-1"></div>
        <div className="border-b border-r"></div>
        <div className="border-b"></div>
        <div className="border-b border-r col-span-2 sm:col-span-1">
  <H1>Guiding the future of design</H1>
          {/* <p
            className="text-8xl uppercase px-3 leading-tight
            // bg-gradient-to-b from-transparent via-white via-20% to-black
            "
            style={{
              backgroundImage:
                // "repeating-linear-gradient(180deg, transparent, transparent 47px, #000 47.5px, #000 48.5px)",
                // "repeating-linear-gradient(180deg, transparent, transparent 59px, #000 59.5px, #000 60.5px)",
                // "repeating-linear-gradient(180deg, transparent, transparent 95px, #000 95.5px, #000 96.5px)",
                "repeating-linear-gradient(180deg, transparent, transparent 122px, #000 122.5px, #000 123.5px)",
            }}
          >
            A Front-end <br />
            Dev by <br /> trade
          </p> */}
        </div>
        <div className="flex border-b p-5 justify-center ">
          <Image
            src={kjlogoonly}
            alt="My Logo"
            className="w-full sm:w-[50%] md:w-[25%] "
          />
        </div>
      </div>
    </>
  );
}
