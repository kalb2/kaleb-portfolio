import type { Metadata } from "next";
import Link from "next/link";
import { CardHandles } from "@/components/CardHandles";
import { LinedHeading } from "@/components/LinedHeading";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { careerCaseStudies } from "@/data/careerCaseStudies";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "STAR case studies for Enterprise CSM work at Connecteam and MDF Commerce, plus account management at Gresham & Myers. Approved retention, expansion, and onboarding results.",
  path: "/case-studies",
});

export default function CaseStudiesIndexPage() {
  return (
    <>
      <TitleBar text="Case Studies" />
      <section
        aria-labelledby="case-studies-intro"
        className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]"
      >
        <div className="border-b border-black p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-xs uppercase tracking-widest">
            Recruiter pack
          </p>
        </div>
        <div className="border-black md:col-span-2">
          <LinedHeading as="h2" id="case-studies-intro" className="px-3">
            Situation. Task. Action. Result.
          </LinedHeading>
          <p className="max-w-3xl p-5 leading-relaxed md:p-8">
            Three roles, written the way hiring managers ask for them. Every
            number comes from the resume. Project pages underneath show the
            systems and tools behind the commercial results.
          </p>
        </div>
      </section>
      <section
        aria-label="Career case studies"
        className="grid overflow-hidden md:grid-cols-3"
      >
        {careerCaseStudies.map((study, index) => (
          <article
            key={study.slug}
            className={`relative flex flex-col border-b border-black p-5 md:p-8 ${
              index < careerCaseStudies.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <CardHandles />
            </div>
            <p className="mb-4 font-mono text-xs">{study.number}</p>
            <p className="font-mono text-xs uppercase tracking-widest">
              {study.company}
            </p>
            <LinedHeading as="h3" className="mt-2">
              {study.role}
            </LinedHeading>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest">
              {study.dates}
            </p>
            <p className="mb-6 mt-4 max-w-xl leading-relaxed">{study.summary}</p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="mt-auto w-fit text-sm underline underline-offset-4"
            >
              Read the {study.company} case study
            </Link>
          </article>
        ))}
      </section>
      <SectionBreak />
      <TitleBar text="Related builds" as="h2" />
      <section
        aria-label="Related project proof"
        className="grid border-b border-black md:grid-cols-3"
      >
        {[
          {
            href: "/projects/feature-request-matcher",
            label: "Feature Request Matcher",
            detail: "AI workflow from calls to release notes",
          },
          {
            href: "/projects/connecteam-internal-tools",
            label: "Connecteam Internal Tools",
            detail: "Dashboards, PDFs, certificates, API helpers",
          },
          {
            href: "/projects/hubspot-mdf",
            label: "HubSpot / MDF",
            detail: "Pipelines, automations, health, onboarding sites",
          },
        ].map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block border-b border-black p-5 last:border-b-0 hover:bg-black hover:text-white md:border-b-0 ${
              index < 2 ? "md:border-r" : ""
            }`}
          >
            <p className="text-xl uppercase tracking-tight">{item.label}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest">
              {item.detail}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
