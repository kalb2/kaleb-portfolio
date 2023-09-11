import React from "react";
import TitleBar from "../components/TitleBar/TitleBar2";
import AboutGrid from "../components/Grid/AboutGrid";
import AboutGridList from "../components/Grid/AboutGridList";
import SectionBreak from "../components/SectionBreak/SectionBreak";

export default function AboutPage() {
  return (
    <div>
      <TitleBar text="About Me" />
      <AboutGrid
        leftTitle="Bio"
        rightTitle="Kaleb Jensen"
        bgimage="/Dubai.jpeg"
        // subtitle={`Husband.<br/> Dad.<br/> Dev.`}
        // subtitle={`Jack of all trades, master of some. `}
        subtitle={`Husband. Dad. Dev. Traveler. Woodworker. Videographer. Lakers Fan. Golfer. `}
        paragraph1={`With a wide variety of interests, there's always something to keep me busy. When I'm not coding, I'm spending time with my family or pursuing these interests.`}
        paragraph2={`Thankfully I know how to teach myself how to do just about anything (with the help of Youtube). `}
        paragraph3={`I wouldn't consider myself in expert in any of these things, which is why this is one of my favorite quotes:`}
        paragraph4={` "All I know is that I know nothing." - Socrates`}
        paragraph5={`No matter how much I learn, there's just as much that I still don't. I try and embrace that and always pursue learning.`}
        // paragraph6={` "All I know is that I know nothing." - Socrates`}
        href1="https://www.linkedin.com/in/kalebjensen/"
        href1title="LinkedIn"
        href2="https://github.com/kalb2"
        href2title="Github"
      />
      <SectionBreak />
      {/* <AboutGridList
        leftTitle="About Me"
        rightTitle="Kaleb Jensen"
        bgimage="/Profile-Photo.jpeg"
        subtitle="An aspiring Front-End Developer focused on creating appealing designs and useful applications."
        paragraph1={`After graduating with a degree in Marketing and spending the next phase of my career in Marketing and Sales, I decided to make a transition to a career in Front-End Web Development.`}
        paragraph2={`I have always had a passion for creating things, and found that
          Front-End Development gave me an outlet to create limitless
          projects.`}
        listheader={` My approach to`}
        listitems={[
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 4",
          "Item 5",
        ]}
        href1="https://www.linkedin.com/in/kalebjensen/"
        href1title="LinkedIn"
        href2="https://github.com/kalb2"
        href2title="Github"
      /> */}
    </div>
  );
}
