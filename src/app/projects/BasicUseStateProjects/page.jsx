import React from "react";
import Counter from "../../components/projectcomponents/UseState/counter";
import ChangeAge from "../../components/projectcomponents/UseState/ChangeAge";
import UpdateName from "../../components/projectcomponents/UseState/updateName";
import ArrayState from "../../components/projectcomponents/ArrayState/arrayState";
import "./styles.css";
import GithubLink from "@/app/components/GithubLink/GithubLink";
import { H1 } from "@/app/styles/components";

const repoUrl =
  "https://github.com/kalb2/kaleb-portfolio/blob/c7510a6a05bdf4467585a6ac4c9e61e8917d9ec7/src/app/projects/BasicUseStateProjects/page.jsx";

export default function BasicUseStateProjectsPage({ href }) {
  return (
    <>
      <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
        <div className="flex items-center px-3 grow">Basic useState Hook</div>
        <div className="flex items-center px-3">001</div>
      </div>
      <div className="flex flex-col md:flex-row sm:h-[calc(100vh-7rem)]">
        <div className="basis-1/3 sm:border-r flex flex-col">
          <div className="flex flex-col grow border-b ">
            <H1
            // className="text-black text-5xl uppercase sm:border-b"
            // style={{
            //   backgroundImage:
            //     "repeating-linear-gradient(180deg, transparent, transparent 47px, #000 47.5px, #000 48.5px)",
            // }}
            >
              Creating Basic Examples of the useState hook.
            </H1>
            <div className="flex justify-center grow p-3">
              <GithubLink href={repoUrl} />
            </div>
          </div>
          <div className="h-1/4 p-5 border-b sm:border-b-0">
            <p className="py-1">
              When I began learning React, I created these examples to solidify
              my understanding of the useState hook.
            </p>
            <p className="py-1">
              Whether it was an indivual state or multiple, I have found this to
              be invaluable over my career.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 basis-2/3">
          <div className="flex flex-col items-center border-b sm:border-r ">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Simple Counter
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <Counter />
            </div>
          </div>
          <div className="flex flex-col items-center border-b sm:border-r">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Change On Input
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <ChangeAge />
            </div>
          </div>

          <div className="flex flex-col items-center sm:border-r border-b sm:border-b-0">
            <div className="border-b w-full text-center text-2xl h-10 py-1">
              Single Array State
            </div>
            <div className="flex-grow flex items-center justify-center py-2">
              <UpdateName />
            </div>
          </div>
          <div className="flex flex-col items-center sm:border-r">
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
