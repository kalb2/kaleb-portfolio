import React from "react";

export default function IntroGrid() {
  return (
    <>
      <div className="flex w-full border-b p-1">
        <h1 className="text-6xl uppercase tracking-widest">Welcome</h1>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 h-80">
        <div className="row-span-2 border-r border-b">1</div>
        <div className="border-r border-b">2</div>
        <div className="border-b">3</div>
        <div className="border-r border-b">
          <h2 className="text-5xl uppercase">
            A Front-end
            <hr /> Dev by <hr />
            trade
          </h2>
        </div>
        <div className=" border-b">5</div>
      </div>
    </>
  );
}
