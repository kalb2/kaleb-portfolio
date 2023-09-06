import React from "react";
import TitleBar from "../components/TitleBar/TitleBar2";

export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      <div className=" md:h-[calc(100vh-6.14rem)] lg:h-[calc(100vh-8.25rem)] xl:h-[calc(100vh-10.125rem)]">
        <div className="flex flex-col h-full md:grid md:grid-cols-[1fr_3fr_2fr] md:grid-rows-[1fr_4fr_6fr_1fr] divide-x divide-y border-r border-b">
          <div className="col-span-1 row-span-1 hidden md:flex items-center pl-3 border-t border-l">
            <h2>About Me</h2>
          </div>
          <div className="col-span-1 row-span-1 flex items-center pl-3">
            <h2>Kaleb Jensen</h2>
          </div>
          <div
            className="col-span-1 row-span-4 grayscale min-h-[50vh] order-first md:order-none"
            style={{
              backgroundImage: "url('/Profile-Photo.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col-span-1 row-span-1 hidden md:block"></div>
          <div className="col-span-1 row-span-1">
            <h3 className="custom-bg pl-3">
              An aspiring Front-End Developer focused on creating appealing
              designs and useful applications.
            </h3>
          </div>
          <div className="col-span-1 row-span-2 hidden md:block"></div>
          <div className="col-span-1 row-span-1 columns-1 md:columns-2 md:gap-8 p-3 md:p-8">
            <p className=" break-after-auto">
              After graduating with a degree in Marketing and spending the next
              phase of my career in Marketing and Sales, I decided to make a
              transition to a career in Front-End Web Development.
            </p>
            <br/>
            <p className=" break-after-auto">
              I have always had a passion for creating things, and found that
              Front-End Development gave me an outlet to create limitless
              projects with applications that can stretch far and wide.
            </p>
            <br/>
            <p className=" break-after-auto">
            My approach to Front-End Development is the same as my approach to many thing in life: 
            </p>
            <br/>
            <p className=" break-after-auto">
            &quot;All I know is that I know nothing.&quot; - Socrates
            </p>
            <br/>
          </div>
          <div className="col-span-1 row-span-1 flex flex-row items-center justify-around md:divide-x">
            <div className="grow h-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/kalebjensen/"
                target="_blank"
              >
                <h2 className=" pl-4 after:content-['_↗'] after:text-2xl sm:after:text-4xl ">
                  LinkedIn
                </h2>
              </a>
            </div>
            <div className="grow h-full flex items-center justify-center">
              <a href="https://github.com/kalb2" target="_blank">
                <h2 className=" pl-4 after:content-['_↗'] after:text-2xl sm:after:text-4xl ">
                  Github
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
