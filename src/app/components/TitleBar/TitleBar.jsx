import React from "react";

export default function TitleBar({ text }) {

  return (
    <div className="flex w-full p-1 bg-black text-white">
      <h1 className="text-6xl uppercase tracking-widest">{text}</h1>
    </div>
  );
}


