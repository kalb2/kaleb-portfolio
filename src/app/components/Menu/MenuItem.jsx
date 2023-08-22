import Link from "next/link";
import React from "react";

export default function MenuItem({ text, href }) {
  return (
    <Link href={href}>
      <div className="border-t flex justify-between h-14">
        <div className="border-r h-full flex flex-col justify-end">
          <h1 className="text-4xl uppercase">{text}</h1>
        </div>
        <div>Image</div>
      </div>
    </Link>
  );
}
