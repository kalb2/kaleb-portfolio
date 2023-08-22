import Link from "next/link";
import React from "react";

export default function MenuItem({ text }) {
  return (
    <li className="border-t h-14 flex justify-between">
      <Link href="/projects">
        <div>
          <h1 className="text-4xl uppercase">{text}</h1>
        </div>
        <div className="border-l">Image</div>
      </Link>
    </li>
  );
}
