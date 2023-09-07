import AboutGrid from "../components/Grid/AboutGrid";
import SectionBreak from "../components/SectionBreak/SectionBreak";
import TitleBar from "../components/TitleBar/TitleBar2";

export default function ExperiencePage() {
  return (
    <>
      <div>
        <TitleBar text="Experience" />
        <AboutGrid 
          leftTitle="About Me"
          rightTitle="Kaleb Jensen"
          bgimage="/Profile-Photo.jpeg"
          subtitle="An aspiring Front-End Developer focused on creating appealing
          designs and useful applications."
          paragraph1=" After graduating with a degree in Marketing and spending the next
          phase of my career in Marketing and Sales, I decided to make a
          transition to a career in Front-End Web Development."
          paragraph2="I have always had a passion for creating things, and found that
          Front-End Development gave me an outlet to create limitless
          projects with applications that can stretch far and wide."
          paragraph3=" My approach to Front-End Development is the same as my approach to many thing in life: "
          paragraph4=" &quot;All I know is that I know nothing.&quot; - Socrates"
          href1= "https://www.linkedin.com/in/kalebjensen/"
          href1title="LinkedIn"
          href2= "https://github.com/kalb2"
          href2title="Github"
          />
        
        <SectionBreak />
        <AboutGrid 
          leftTitle="Hello"
          rightTitle="Gresham and Myers"
          bgimage="/PrimeRib.JPG"
          subtitle="A Marketer with a passion for entrepreneurship."
          paragraph1="This is a paragraph"
          paragraph2="This is a paragraph"
          paragraph3="This is a paragraph"
          paragraph4="This is a paragraph"
          href1= "https://www.linkedin.com/in/kalebjensen/"
          href1title="LinkedIn"
          href2= "https://github.com/kalb2"
          href2title="Github"
          />
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
