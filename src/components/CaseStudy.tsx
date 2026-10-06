import Image from "next/image";
import { CardHandles } from "@/components/CardHandles";
import { ProjectPattern } from "@/components/ProjectPattern";
import { CaseStudyStackItem, Project } from "@/data/projects";

type CaseStudyProps = {
  project: Project;
};

function StackMark({ mark }: { mark: CaseStudyStackItem["mark"] }) {
  const common = "h-4 w-4 shrink-0";
  if (mark === "attention") {
    return (
      <svg viewBox="0 0 16 16" className={common} aria-hidden="true">
        <path
          d="M1 8h2.2L5 4.2 7.2 12 9.4 6.2 11 8.8H15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }
  if (mark === "chatgpt") {
    return (
      <svg viewBox="0 0 16 16" className={common} aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" fill="currentColor" />
        <path
          d="M8 1.5v2.2M8 12.3v2.2M1.5 8h2.2M12.3 8h2.2M3.2 3.2l1.6 1.6M11.2 11.2l1.6 1.6M12.8 3.2l-1.6 1.6M4.8 11.2l-1.6 1.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }
  if (mark === "sheets") {
    return (
      <svg viewBox="0 0 16 16" className={common} aria-hidden="true">
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2 6.5h12M2 10.5h12M6.5 2v12M10.5 2v12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={common} aria-hidden="true">
      <rect
        x="1.5"
        y="3.5"
        width="13"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M1.5 4.2 8 9.2l6.5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function CaseStudy({ project }: CaseStudyProps) {
  const study = project.caseStudy;
  if (!study) return null;

  return (
    <>
      <section className="grid border-b border-black lg:grid-cols-[2fr_3fr]">
        <div className="border-b border-black p-6 lg:border-b-0 lg:border-r">
          <div className="relative mx-auto max-w-md outline outline-1 outline-black">
            <CardHandles />
            <div className="relative h-0 pt-[120%]">
              <div className="absolute inset-0">
                <ProjectPattern
                  pattern={project.pattern}
                  number={project.number}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="lined border-b border-black px-4 py-2 text-[1.875rem] uppercase leading-[1.25] sm:text-4xl">
            {project.tagline}
          </h3>
          <blockquote className="flex flex-1 flex-col justify-center bg-black px-6 py-8 text-white">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest">
              The one-line pitch
            </p>
            <p className="max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">
              {study.pitch}
            </p>
          </blockquote>
          <p className="border-t border-black px-6 py-4 font-mono text-xs uppercase leading-relaxed tracking-wide">
            {study.context}
          </p>
        </div>
      </section>

      <section className="grid border-b border-black md:grid-cols-2">
        <div className="border-b border-black p-6 md:border-b-0 md:border-r">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest">
            Situation and task
          </p>
          <p className="max-w-xl text-lg leading-relaxed">{study.situation}</p>
        </div>
        <div className="p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest">
            Action
          </p>
          <p className="max-w-xl text-lg leading-relaxed">{study.action}</p>
        </div>
      </section>

      <section className="border-b border-black">
        <div className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
          <div className="hidden border-r border-black p-4 md:block">
            <p className="font-mono text-xs uppercase tracking-widest">Flow</p>
          </div>
          <div className="border-b border-black p-4 md:border-b-0 md:border-r">
            <h2 className="text-2xl uppercase">How it works</h2>
          </div>
          <div className="p-4">
            <p className="font-mono text-xs uppercase tracking-widest">
              Call to draft email
            </p>
          </div>
        </div>
        <ol>
          {study.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid border-b border-black last:border-b-0 md:grid-cols-[7rem_1fr]"
            >
              <div className="flex items-start border-b border-black p-4 md:border-b-0 md:border-r">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black font-mono text-xs text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl uppercase tracking-tight">{step.title}</p>
                <p className="mt-2 max-w-3xl leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid border-b border-black lg:grid-cols-[2fr_3fr]">
        <div className="border-b border-black p-6 lg:border-b-0 lg:border-r">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest">
            Stack
          </p>
          <ul className="flex flex-col gap-3">
            {study.stack.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 border border-black px-3 py-3"
              >
                <StackMark mark={item.mark} />
                <span>
                  <span className="block text-sm uppercase leading-tight">
                    {item.name}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide">
                    {item.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest">
            Result
          </p>
          <ul>
            {study.results.map((result) => (
              <li
                key={result}
                className="border-b border-black py-3 text-lg leading-relaxed last:border-b-0"
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black">
        <div className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
          <div className="hidden border-r border-black p-4 md:block">
            <p className="font-mono text-xs uppercase tracking-widest">
              Mocks
            </p>
          </div>
          <div className="border-b border-black p-4 md:border-b-0 md:border-r">
            <h2 className="text-2xl uppercase">Illustrative mockups</h2>
          </div>
          <div className="p-4">
            <p className="font-mono text-xs uppercase tracking-widest">
              Not live product shots
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {study.screenshots.map((slot) => (
            <figure
              key={slot.src}
              className="border-b border-black bg-white p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="relative outline outline-1 outline-black">
                <CardHandles />
                <Image
                  src={slot.src}
                  alt={slot.alt}
                  width={1280}
                  height={720}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs uppercase leading-relaxed tracking-wide">
                {slot.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="grid border-b border-black md:grid-cols-[3fr_2fr]">
        <div className="border-b border-black p-6 md:border-b-0 md:border-r">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest">
            Next
          </p>
          <p className="max-w-2xl text-lg leading-relaxed">{study.next}</p>
        </div>
        <a
          href={study.download.href}
          download="Feature_Request_Matcher_OnePager.pdf"
          className="flex items-center justify-between gap-4 p-6 hover:bg-black hover:text-white"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-widest">
              Download
            </span>
            <span className="mt-1 block text-2xl uppercase tracking-tight">
              {study.download.label}
            </span>
          </span>
          <span aria-hidden="true" className="font-mono text-3xl">
            ↓
          </span>
        </a>
      </section>
    </>
  );
}
