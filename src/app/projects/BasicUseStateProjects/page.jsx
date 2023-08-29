import React from "react";
import Counter from "../components/UseState/counter";
import ChangeAge from "../components/UseState/ChangeAge";
import UpdateName from "../components/UseState/updateName";
import ArrayState from "../components/ArrayState/arrayState";
import "./styles.css";

export default function BasicUseStateProjects() {
  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">Basic useState Hook</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-7rem)]">
      <div className="basis-1/3 border-r flex flex-col">
          <div className="grow border-b border-t sm:border-t-0">
            <p
              className="text-black text-5xl uppercase"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, transparent, transparent 47px, #000 47.5px, #000 48.5px)",
              }}
            >
              Creating Basic Examples of the useState hook.
            </p>
          </div>
          <div className="h-1/4 p-5 border-b sm:border-b-0">
            <p className="py-1">
              When I began learning React, I created these examples to solidify
              my understanding of the useState hook.
            </p>
            <p className="py-1">
              Whether it was an indivual state or multiple, I've found this to
              be invaluable over my career.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-basic basis-2/3">
          <div className="flex flex-col items-center border-b border-r ">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Simple Counter
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <Counter />
            </div>
          </div>
          <div className="flex flex-col items-center border-b border-r">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Change On Input
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <ChangeAge />
            </div>
          </div>

          <div className="flex flex-col items-center border-r border-b">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Single Array State
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <UpdateName />
            </div>
          </div>
          <div className="flex flex-col items-center border-r">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Mult. Array States
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <ArrayState />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
