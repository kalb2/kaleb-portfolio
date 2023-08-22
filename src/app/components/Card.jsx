import Link from "next/link";
import React from "react";
import CardHandles from "./CardHandles";

export default function Card() {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="pl-2 text-2xl">Header</h1>
        <div className="flex relative flex-col w-fit">
          <CardHandles />
          <div className="outline">
            <img src="https://avatars.githubusercontent.com/u/132865166?v=4" />
            <div>
              <h3 className="uppercase text-4xl pl-2">Title</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
