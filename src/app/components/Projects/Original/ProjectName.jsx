import React from "react";

export default function ProjectName({title}) {
  return (
    <div className="w-1/3 bg-black ">
      <h2 className=" text-2xl uppercase text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
