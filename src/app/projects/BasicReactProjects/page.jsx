import React from "react";

export default function BasicReactProjects() {
  return (
    <>
      <div className="flex text-3xl divide-x uppercase border-b">
        <div className="p-4 grow">Project Name</div>
        <div className="p-4">001</div>
      </div>
      <div className="flex flex-row-reverse h-screen">
        <div className=" basis-2/3">Project Image</div>
        <div className="basis-1/3 border-r flex flex-col"> 
            <div className="grow border-b">Tagline</div>
            <div className="h-20">Short Description</div>
        </div>
      </div>
    </>
  );
}
