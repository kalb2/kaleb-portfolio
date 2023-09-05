import Link from "next/link";
import React from "react";

export default function MenuItem({
  text,
  href,
  toggleMenu,
  src,
  className,
  menuitemnumber,
}) {
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Link href={href}>
      <div
        className={`flex h-[3.25rem] w-full items-center justify-between border-b
        hover:bg-black 
        hover:text-white
       ${className}`}
        onClick={handleClick}
      >
        {/* <div
          className="peer h-[3.25rem] w-[64px] bg-cover bg-center order-last bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        ></div> */}
        <div className=" h-[3.25rem] w-[64px] order-last flex items-center justify-center text-2xl peer">
          {menuitemnumber}
        </div>
        <div
          className="
              flex 
              h-full 
              grow 
              flex-col 
              justify-end 
              border-r 
              hover:border-r-white
              peer-hover:border-r-white
              "
        >
          <h1 className="text-4xl uppercase text-left">{text}</h1>
        </div>
      </div>
    </Link>
  );
}
