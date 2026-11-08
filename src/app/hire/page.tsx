import type { Metadata } from "next";
import Link from "next/link";
import { CardHandles } from "@/components/CardHandles";
import { InquiryForm } from "@/components/InquiryForm";
import { LinedHeading } from "@/components/LinedHeading";
import { SchedulingLink } from "@/components/SchedulingLink";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Hire Me",
  description: "HubSpot automations, CS operations tools, AI workflows, and customer onboarding sites. Side project help from Enterprise Customer Success Manager Kaleb Jensen.",
  path: "/hire",
});

const offerings = [
  {
    title: "HubSpot systems",
    body: "Custom objects, pipelines, automations, and health scoring that match how your CS team works. Grounded in the HubSpot systems I built at MDF Commerce.",
    href: "/projects/hubspot-mdf",
    proof: "See the HubSpot / MDF project",
  },
  {
    title: "CS operations tools",
    body: "Dashboards, PDF and certificate generators, and API helpers for recurring manual work. Built from the same hands-on approach as my Connecteam internal tools.",
    href: "/projects/connecteam-internal-tools",
    proof: "See the internal tools project",
  },
  {
    title: "AI workflow builds",
    body: "Connect customer conversations, request logs, and release notes into a useful follow-up workflow. The Feature Request Matcher shows how I turn that loop into drafts a person reviews before sending.",
    href: "/projects/feature-request-matcher",
    proof: "See the Feature Request Matcher case study",
  },
  {
    title: "Customer onboarding sites",
    body: "Give customers a clear place to start with onboarding steps and resources, instead of a scattered pile of links. Based on the client onboarding websites I built at MDF Commerce.",
    href: "/projects/hubspot-mdf",
    proof: "See the MDF onboarding work",
  },
];

export default function HirePage() {
  return (
    <>
      <TitleBar text="Hire Me" />
      <section className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="border-b border-black p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-xs uppercase tracking-widest">Side projects</p>
        </div>
        <div className="border-black md:col-span-2">
          <LinedHeading as="h2" className="px-3">Less manual work. More customer time.</LinedHeading>
          <p className="max-w-3xl p-5 leading-relaxed md:p-8">
            I am an Enterprise Customer Success Manager who builds the tools around the book.
            If your team needs a focused HubSpot, CS operations, or AI workflow project,
            tell me what is getting in the way. We can work out the scope together.
          </p>
        </div>
      </section>
      <section aria-label="Side project offerings" className="grid overflow-hidden md:grid-cols-2">
        {offerings.map((offering, index) => (
          <article key={offering.title} className={`relative flex flex-col border-b border-black p-5 md:p-8 ${index % 2 === 0 ? "md:border-r" : ""}`}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0"><CardHandles /></div>
            <p className="mb-4 font-mono text-xs">{String(index + 1).padStart(3, "0")}</p>
            <LinedHeading as="h3">{offering.title}</LinedHeading>
            <p className="mb-6 mt-4 max-w-xl leading-relaxed">{offering.body}</p>
            <Link href={offering.href} className="mt-auto w-fit text-sm underline underline-offset-4">{offering.proof}</Link>
          </article>
        ))}
      </section>
      <SectionBreak />
      <TitleBar text="Send an inquiry" as="h2" />
      <section aria-label="Project inquiry" className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="hidden border-r border-black p-4 md:block"><p className="text-2xl uppercase">Start here</p></div>
        <div className="p-5 md:col-span-2 md:p-8 lg:pr-32">
          <p className="mb-6 max-w-2xl leading-relaxed">What are you trying to improve? Share the workflow, the tools you use, and what a useful outcome would look like.</p>
          <SchedulingLink />
          <InquiryForm defaultType="Side project" />
        </div>
      </section>
    </>
  );
}
