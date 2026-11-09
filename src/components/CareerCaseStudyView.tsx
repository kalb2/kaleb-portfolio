import Link from "next/link";
import { CardHandles } from "@/components/CardHandles";
import { LinedHeading } from "@/components/LinedHeading";
import type { CareerCaseStudy } from "@/data/careerCaseStudies";

type CareerCaseStudyViewProps = {
  study: CareerCaseStudy;
};

const starBlocks: {
  key: "situation" | "task" | "action";
  label: string;
}[] = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
];

export function CareerCaseStudyView({ study }: CareerCaseStudyViewProps) {
  return (
    <>
      <section
        aria-labelledby={`${study.slug}-headline`}
        className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]"
      >
        <div className="border-b border-black p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-xs uppercase tracking-widest">
            {study.dates}
          </p>
        </div>
        <div className="border-b border-black p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-xs uppercase tracking-widest">
            {study.role}
          </p>
          <LinedHeading
            as="h2"
            id={`${study.slug}-headline`}
            className="mt-2"
          >
            {study.headline}
          </LinedHeading>
        </div>
        <div className="p-4">
          <p className="leading-relaxed">{study.summary}</p>
        </div>
      </section>

      <section
        aria-label={`${study.company} STAR narrative`}
        className="grid border-b border-black md:grid-cols-3"
      >
        {starBlocks.map((block, index) => (
          <article
            key={block.key}
            className={`relative border-b border-black p-5 last:border-b-0 md:border-b-0 ${
              index < starBlocks.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <CardHandles />
            </div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest">
              {block.label}
            </h3>
            <p className="leading-relaxed">{study[block.key]}</p>
          </article>
        ))}
      </section>

      <section
        aria-labelledby={`${study.slug}-results`}
        className="grid border-b border-black lg:grid-cols-[2fr_3fr]"
      >
        <div className="border-b border-black p-5 lg:border-b-0 lg:border-r">
          <h3
            id={`${study.slug}-results`}
            className="mb-4 font-mono text-xs uppercase tracking-widest"
          >
            Result
          </h3>
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
        <div className="p-5">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest">
            Related proof
          </h3>
          <ul className="flex flex-col gap-3">
            {study.relatedProjects.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between border border-black px-4 py-3 hover:bg-black hover:text-white"
                >
                  <span className="text-sm uppercase tracking-tight">
                    {link.label}
                  </span>
                  <span aria-hidden="true" className="font-mono text-lg">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
