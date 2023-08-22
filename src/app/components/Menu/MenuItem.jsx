import Link from "next/link";
import React from "react";

export default function MenuItem({ text, href, toggleMenu }) {
  const handleClick = () => {
    toggleMenu(); // Close the menu when the link is clicked
  };
  return (
    <Link href={href}>
      <div className="border-t flex justify-between h-14" onClick={handleClick}>
        <div className="border-r h-full flex flex-col justify-end">
          <h1 className="text-4xl uppercase">{text}</h1>
        </div>
        <div>Image</div>
      </div>
    </Link>
  );
}
