import React from "react";
import TitleBar from "../components/TitleBar/TitleBar2";
import AboutGrid from "../components/Grid/AboutGrid";

export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      <AboutGrid
        leftTitle="About Me"
        rightTitle="Kaleb Jensen"
        bgimage="/Profile-Photo.jpeg"
        subtitle="An aspiring Front-End Developer focused on creating appealing designs and useful applications."
        paragraph1={`After graduating with a degree in Marketing and spending the next phase of my career in Marketing and Sales, I decided to make a transition to a career in Front-End Web Development.`}
        paragraph2={`I have always had a passion for creating things, and found that
          Front-End Development gave me an outlet to create limitless
          projects with applications that can stretch far and wide.`}
        paragraph3={` My approach to Front-End Development is the same as my approach to many things in life:`}
        paragraph4={` "All I know is that I know nothing." - Socrates`}
        href1="https://www.linkedin.com/in/kalebjensen/"
        href1title="LinkedIn"
        href2="https://github.com/kalb2"
        href2title="Github"
      />
    </div>
  );
}
