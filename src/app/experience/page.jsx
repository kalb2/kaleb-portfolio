import AboutGrid from "../components/Grid/AboutGrid";
import AboutGridFAQ from "../components/Grid/AboutGridFAQ";
import SectionBreak from "../components/SectionBreak/SectionBreak";
import TitleBar from "../components/TitleBar/TitleBar2";

export default function ExperiencePage() {
  return (
    <>
      <div>
        <TitleBar text="Experience" />
        <AboutGridFAQ
          leftTitle="FAQ"
          rightTitle="What is my background?"
          bgimage="/Profile-Photo.jpeg"
          subtitle={`Making the switch from Sales & Marketing to Front-End Web Developer.`}
          header1={`Have I been a front-end dev before?`}
          paragraph1={`No. So far my career has focused on Marketing and Sales. But now I'm making a switch.`}
          header2={`Why the switch?`}
          paragraph2={`I want a career where I can advance based on quantifiable skills.`}
          header3={`But can I do it?`}
          paragraph3={`If I can't already, I'll figure it out. Check out my Github to see the projects I've been working on.`}
          header4={`Why should you hire me?`}
          paragraph4={`I'll be the hardest worker you've ever hired.`}
          header5={`Will I really?`}
          paragraph5={`Let me prove it - Let's chat.`}
          FAQ={[
            {
              header: `Why the switch?`,
              paragraph: `I want a long-term career that more closely aligns with my goals, personality, and abilities. Coding allows me to combine problem-solving with technical expertise`,
            },
            {
              header: `Have I been a front-end dev before?`,
              paragraph: `No. But I have led design projects, built websites, and worked closely with dev teams. On top of that, I've been dabbling in coding for 10+ years.`,
            },
            {
              header: `Why do I think I can do it?`,
              paragraph: `Take a look at this website. Being self-taught, I built it from scratch with React, Next.js, and Tailwind. Check out my Github to see the other projects I've been working on.`,
            },
            {
              header: `Why should you hire me?`,
              paragraph: `The best quality in a salesperson is their dedication. A marketer understands their customers. Combine those and I am a dev that will work tirelessly to satisfy users.`,
            },
            {
              header: `Will I really?`,
              paragraph: `Let me prove it - Let's chat.`,
            },
          ]}
          href1="https://drive.google.com/file/d/1uJMMSSKpXHWpaAnDPxn_RSsJOO8eCqiA/view?usp=sharing"
          href1title="My Resume"
          href2="https://github.com/kalb2"
          href2title="Github"
        />
        <SectionBreak />
        {/* <AboutGrid
          leftTitle="Hello"
          rightTitle="Gresham and Myers"
          bgimage="/PrimeRib.JPG"
          subtitle="A Marketer with a passion for entrepreneurship."
          paragraph1="This is a paragraph"
          paragraph2="This is a paragraph"
          paragraph3="This is a paragraph"
          paragraph4="This is a paragraph"
          href1="https://drive.google.com/file/d/18djaIxSWLskokwpLhJXPWC1X-Ye2y3KG/view?usp=sharing"
          href1title="My Resume"
          href2="https://github.com/kalb2"
          href2title="Github"
        /> */}
      </div>

      {/* <TitleBar text="Experience" />
      <div className="h-[calc(100vh-7.25rem)] bg-black text-white flex flex-col">
        <div className=" text-white text-5xl">Coming Soon...</div>
        <div className="flex flex-col justify-center items-center grow p-3 gap-2">          <a
            href="https://drive.google.com/file/d/18djaIxSWLskokwpLhJXPWC1X-Ye2y3KG/view?usp=sharing"
            target="_blank"
            
          >
            <button className="bg-white text-black">
            Download my Resume
            </button>
          </a>
        </div>
      </div> */}
    </>
  );
}
