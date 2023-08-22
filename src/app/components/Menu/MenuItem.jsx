import Link from "next/link";
import React from "react";

export default function MenuItem({ text, href, toggleMenu, src }) {
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Link href={href}>
      <div className="border-b flex justify-between items-center w-full h-14" onClick={handleClick}>
        <div className="border-r h-full flex grow flex-col justify-end">
          <h1 className="text-4xl uppercase">{text}</h1>
        </div>
        <div className="w-14 h-14 border-y bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </Link>
  );
}
