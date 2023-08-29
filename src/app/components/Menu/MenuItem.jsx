import Link from "next/link";
import React from "react";

export default function MenuItem({ text, href, toggleMenu, src }) {
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Link href={href}>
      <div
        className="flex h-14 w-full items-center justify-between border-b "
        onClick={handleClick}
      >
        <div
          className="peer h-14 w-[64px] border-y bg-cover bg-center order-last bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div
          className="
              flex 
              h-full 
              grow 
              flex-col 
              justify-end 
              border-r 
              hover:bg-black 
              hover:text-white
              peer-hover:bg-black 
              peer-hover:text-white
              "
        >
          <h1 className="text-4xl uppercase text-left">{text}</h1>
        </div>
      </div>
    </Link>
  );
}
