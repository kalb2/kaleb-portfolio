import { Project } from "@/data/projects";

type ProjectPatternProps = {
  pattern: Project["pattern"];
  number: string;
};

export function ProjectPattern({ pattern, number }: ProjectPatternProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {pattern === "grid" && (
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="border-b border-r border-black/80" />
          ))}
        </div>
      )}
      {pattern === "bars" && (
        <div className="absolute inset-0 flex flex-col">
          {[1, 0.72, 0.9, 0.45, 0.8, 0.3].map((width, index) => (
            <div
              key={index}
              className="flex flex-1 items-end border-b border-black"
            >
              <div
                className="h-full bg-black"
                style={{ width: `${width * 100}%` }}
              />
            </div>
          ))}
        </div>
      )}
      {pattern === "rings" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[90, 70, 50, 30].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-black"
              style={{ width: `${size}%`, height: `${size * 0.72}%` }}
            />
          ))}
        </div>
      )}
      {pattern === "slash" && (
        <div className="absolute inset-0">
          {[-40, -20, 0, 20, 40, 60].map((offset) => (
            <div
              key={offset}
              className="absolute h-[140%] w-px origin-top-left rotate-12 bg-black"
              style={{ left: `${offset + 30}%`, top: "-10%" }}
            />
          ))}
        </div>
      )}
      {pattern === "columns" && (
        <div className="absolute inset-0 grid grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`border-r border-black ${
                index % 2 === 0 ? "bg-black" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
      {pattern === "steps" && (
        <div className="absolute inset-0 flex flex-col justify-end">
          {[20, 36, 52, 70, 88].map((width) => (
            <div
              key={width}
              className="border-t border-black bg-white"
              style={{ height: "18%", width: `${width}%` }}
            />
          ))}
        </div>
      )}
      <div className="absolute inset-0 flex items-end p-5">
        <span
          className={`font-mono text-6xl leading-none tracking-tighter ${
            pattern === "columns" || pattern === "bars"
              ? "text-white mix-blend-difference"
              : "text-black"
          }`}
        >
          {number}
        </span>
      </div>
    </div>
  );
}
