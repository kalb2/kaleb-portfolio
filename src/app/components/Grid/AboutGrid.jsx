import React from "react";
import TitleBar from "../TitleBar/TitleBar";

export default function AboutGrid({
  leftTitle,
  rightTitle,
  bgimage,
  subtitle,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  href1,
  href1title,
  href2,
  href2title,
}) {
  return (

        <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_3fr_2fr] md:grid-rows-[1fr_4fr_6fr_1fr] divide-x divide-y border-r border-b">
          <div className="col-span-1 row-span-1 hidden md:flex items-center pl-3 border-t border-l">
            <h2>{leftTitle}</h2>
          </div>
          <div className="col-span-1 row-span-1 flex items-center pl-3">
            <h2>{rightTitle}</h2>
          </div>
          <div
            className="col-span-1 row-span-4 min-h-[50vh] order-first md:order-none"
            style={{
              backgroundImage: `url(${bgimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col-span-1 row-span-1 hidden md:block"></div>
          <div className="col-span-1 row-span-1">
            <h3 className="custom-bg pl-3">{subtitle}</h3>
          </div>
          <div className="col-span-1 row-span-2 hidden md:block"></div>
          <div className="col-span-1 row-span-1 columns-1 md:columns-2 md:gap-8 p-3 md:p-8">
            <p className=" break-after-auto">{paragraph1}</p>
            <br />
            <p className=" break-after-auto">{paragraph2}</p>
            <br />
            <p className=" break-after-auto">{paragraph3}</p>
            <br />
            <p className=" break-after-auto">{paragraph4}</p>
            <br />
          </div>
          <div className="col-span-1 row-span-1 flex flex-row items-center justify-around divide-x">
            <div className="grow flex items-center justify-center min-h-[40px]">
              <a href={href1} target="_blank">
                <h2 className=" pl-4 after:content-['_↗'] after:text-2xl sm:after:text-4xl ">
                  {href1title}
                </h2>
              </a>
            </div>
            <div className="grow h-full flex items-center justify-center min-h-[40px] ">
              <a href={href2} target="_blank">
                <h2 className=" pl-4 after:content-['_↗'] after:text-2xl sm:after:text-4xl ">
                  {href2title}
                </h2>
              </a>
            </div>
          </div>
        </div>
  );
}
