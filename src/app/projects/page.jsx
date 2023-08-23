import Carousel from "../components/Carousel";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-wrap divide-x h-[75vh] border-b">
        <div className="w-full sm:w-1/2 border-b sm:border-0">Tabs</div>
        <div className="w-full sm:w-1/2 divide-y">
          <div className="h-3/4">
            <Carousel />
          </div>
          <div className="flex divide-x h-1/4">
            <div className="w-1/3 bg-black ">
              <h2 className="text-2xl sm:text-3xl uppercase text-white">
                A Front-end
                <hr /> Dev by <hr />
                trade
              </h2>
            </div>
            <div className="w-1/3 grow p-3">
              <p>
                Description this is a ton of text where I am descriging what I
                did in this project but it is more of a tagline thatn a true
                description{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
