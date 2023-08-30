import React from 'react'


export default function ThisWebsitePage() {
  return (
    <>
    <div className="flex text-2xl sm:text-3xl h-14 divide-x uppercase border-b">
      <div className="flex items-center px-3 grow">This Website</div>
      <div className="flex items-center px-3">001</div>
    </div>
    <div className="flex flex-col sm:flex-row sm:h-[calc(100vh-7rem)]">
    <div className="basis-1/3 sm:border-r flex flex-col">
        <div className="grow border-b ">
          <p
            className="text-black text-5xl uppercase sm:border-b"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent, transparent 47px, #000 47.5px, #000 48.5px)",
            }}
          >
            My First Next.js Project
          </p>
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
      <div className="grid grid-cols-basic basis-2/3">
        
      </div>

    </div>
  </>
);
}