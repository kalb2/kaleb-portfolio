import React from "react";
import TitleBar from "../TitleBar/TitleBar";

export default function AboutGridList({
  leftTitle,
  rightTitle,
  bgimage,
  subtitle,
  paragraph1,
  paragraph2,
  listheader,
  listitems,
  href1,
  href1title,
  href2,
  href2title,
}) {
  return (
    <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_3fr_2fr] md:grid-rows-[1fr_4fr_6fr_1fr] md:border-r border-b">
      <div className="col-span-1 row-span-1 hidden md:flex items-center pl-3 border-r border-b ">
        <h2>{leftTitle}</h2>
      </div>
      <div className="col-span-1 row-span-1 flex items-center pl-3 border-b md:border-r min-h-[40px]">
        <h2>{rightTitle}</h2>
      </div>
      <div
        className="col-span-1 row-span-4 min-h-[50vh] order-first md:order-none "
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="col-span-1 row-span-1 hidden md:block border-r border-b"></div>
      <div className="col-span-1 row-span-1 border-b md:border-r">
        <h3 className="custom-bg pl-3 ">{subtitle}</h3>
      </div>
      <div className="col-span-1 row-span-2 hidden md:block border-r"></div>
      <div className="col-span-1 flex flex-col md:flex-row row-span-1 md:border-r">
        <div className="basis-1/2 p-5 md:p-8">
          <p className=" break-after-auto mb-5">{paragraph1}</p>
          <p className=" break-after-auto mb-5">{paragraph2}</p>
        </div>
        <div className="basis-1/2 p-5 md:p-8">
          <h2 className="mb-3">{listheader}</h2>
          <ul className="list-disc list-inside space-y-3">
            {listitems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1 row-span-1 flex flex-row items-center justify-around divide-x border-t md:border-r">
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
