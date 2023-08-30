import Link from "next/link";
import React from "react";
import CardHandles from "./CardHandles";
import CardTopTitle from "./CardTopTitle";
import CardBottomTitle from "./CardBottomTitle";
import profilepic from "../../assets/Kaleb Jensen.png"
import code from "../../../../public/Code.png"

export default function Card({ text, title, href }) {
  return (
    <div className="shrink-0 h-[550px] w-[360px] odd:translate-y-[-0.6rem] even:translate-y-[0.6rem] ">
      <div>
        <CardTopTitle text={text} />
      </div>
      <Link href={href}>
        <div className=" relative ">
          <CardHandles />
          <div className="outline relative h-0 pt-[120%] bg-center" style={{backgroundImage: `url(${code.src})`, backgroundSize: "cover", }}>
            {/* <img src="https://avatars.githubusercontent.com/u/132865166?v=4" /> */}
          </div>
            <CardBottomTitle title={title} />
        </div>
      </Link>
     </div>
  );
}
