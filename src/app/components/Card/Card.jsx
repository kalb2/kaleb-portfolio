import Link from "next/link";
import React from "react";
import CardHandles from "./CardHandles";
import CardTopTitle from "./CardTopTitle";
import CardBottomTitle from "./CardBottomTitle";

export default function Card({ text, title, href }) {
  return (
    <div>
      <Link href={href}>
        <CardTopTitle text={text} />
        <div className=" relative -z-20 ">
          <CardHandles />
          <div className="outline">
            <img src="https://avatars.githubusercontent.com/u/132865166?v=4" />
            <CardBottomTitle title={title} />
          </div>
        </div>
      </Link>
    </div>
  );
}
