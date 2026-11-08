import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SchedulingLink } from "@/components/SchedulingLink";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Kaleb Jensen about Enterprise or Strategic CSM roles, SaaS customer success, HubSpot automations, or a side project.",
  path: "/contact",
});

const actions = [
  {
    href: `mailto:${site.email}`,
    label: "Email",
    detail: site.email,
  },
  {
    href: site.resume,
    label: "Resume",
    detail: "Google Drive",
    external: true,
  },
  {
    href: site.linkedin,
    label: "LinkedIn",
    detail: "Primary",
    external: true,
  },
  {
    href: site.github,
    label: "GitHub",
    detail: "Secondary",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <TitleBar text="Contact Me" />
      <section className="grid min-h-[calc(100svh-8rem)] border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="hidden border-r border-black p-4 md:block">
          <h2 className="text-2xl uppercase">Hire</h2>
        </div>
        <div className="flex flex-col border-black md:border-r">
          <h2 className="lined border-b border-black px-3 text-[1.875rem] uppercase leading-[1.25] sm:text-4xl xl:text-5xl">
            Let’s talk about the book, the tools, or the next role.
          </h2>
          <p className="border-b border-black p-5 leading-relaxed md:p-8">
            Hiring conversations and focused side projects are welcome. Email is the fastest path. Resume
            and LinkedIn are the primary backups. The{" "}
            <Link href="/projects/feature-request-matcher" className="underline">
              Feature Request Matcher case study
            </Link>{" "}
            is a quick look at how I build. GitHub is there if you want to see
            how the internal tools and side projects are built.
          </p>
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="flex items-center justify-between border-b border-black px-5 py-5 last:border-b-0 hover:bg-black hover:text-white"
            >
              <span className="text-2xl uppercase tracking-tighter">
                {action.label}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest after:ml-2 after:content-['↗']">
                {action.detail}
              </span>
              {action.external ? (
                <span className="sr-only"> (opens in a new tab)</span>
              ) : null}
            </a>
          ))}
        </div>
        <div className="hidden items-center justify-center p-8 md:flex">
          <p className="font-mono text-xs uppercase tracking-[0.25em]">
            {site.company}
            <br />
            {site.location}
          </p>
        </div>
      </section>
      <SectionBreak />
      <TitleBar text="Send an inquiry" as="h2" />
      <section aria-label="Contact inquiry" className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="hidden border-r border-black p-4 md:block"><p className="text-2xl uppercase">Your note</p></div>
        <div className="p-5 md:col-span-2 md:p-8 lg:pr-32">
          <SchedulingLink />
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
