import React from "react";
import Counter from "../../components/projectcomponents/UseState/counter";
import ChangeAge from "../../components/projectcomponents/UseState/ChangeAge";
import UpdateName from "../../components/projectcomponents/UseState/updateName";
import ArrayState from "../../components/projectcomponents/ArrayState/arrayState";
import "./styles.css";
import GithubLink from "@/app/components/GithubLink/GithubLink";
import { H1 } from "@/app/styles/components";
import BUSProjects from "./BUSProjects";

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
          <div className="flex flex-col  border-b ">
            <h3 className="custom-bg border-b">
              Creating Basic Examples of the useState hook.
            </h3>
            <div className="flex justify-center grow p-3">
              <GithubLink href={repoUrl} />
            </div>
          </div>
          <div className="h-1/4 p-5 border-b sm:border-b-0">
            <p className="py-1 mb-5">
              When I began learning React, I created these examples to solidify
              my understanding of the useState hook. Combining those with
              concepts like event listeners and array manipulation gave me a
              wide variety of applications to pull from in future projects.
            </p>
            <p className="py-1 mb-5">
              From a simple counter with a button to add 1 each time...
            </p>
            <p className="py-1 mb-5">
              To changing the value of something on a page based on an input...
            </p>
            <p className="py-1 mb-5">
              Removing an item from an array with a button...
            </p>
            <p className="py-1 mb-5">
              And changing an array based on multiple useStates...
            </p>
            <p className="py-1 mb-5">
              All these concepts have laid the foundation of my React journey.{" "}
            </p>
          </div>
        </div>
        <BUSProjects />
      </div>
    </>
  );
}
