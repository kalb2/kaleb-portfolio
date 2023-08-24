import Carousel from "../components/Carousel/Carousel";
import TabNavigation from "../components/ProjectsTab/TabNavigation";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex h-[75vh] flex-wrap divide-x border-b">
        <div className="w-full border-b sm:w-1/2 sm:border-0">
          <TabNavigation />
        </div>
        <div className="w-full divide-y sm:w-1/2">
          <div className="h-3/4">
            <Carousel />
          </div>
          <div className="flex h-1/4 divide-x">
            <div className="w-1/3 bg-black ">
              <h2 className=" text-2xl uppercase text-white  sm:text-3xl">
                My Current
                <hr /> Front-End<hr />
                Portfolio
              </h2>
            </div>
            <div className="w-1/3 grow p-3">
              <p>
                After several failed attempts to create my own portfolio to showcase my skills, past projects, and background I finally landed on this portfolio created with NEXTJS. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
