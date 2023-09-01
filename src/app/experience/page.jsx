import TitleBar from "../components/TitleBar/TitleBar2";

export default function ExperiencePage() {
  return (
    <>
      <TitleBar text="Experience" />
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
      </div>
    </>
  );
}
