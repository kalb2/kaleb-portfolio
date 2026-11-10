import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SectionBreak } from "@/components/SectionBreak";
import { SplitGrid } from "@/components/SplitGrid";
import { TitleBar } from "@/components/TitleBar";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise Customer Success Experience",
  description:
    "Enterprise and Strategic CSM experience in SaaS renewals, expansion, and NRR. Connecteam portfolio ownership and HubSpot CS operations at MDF Commerce.",
  path: "/experience",
});

const faq = [
  {
    header: "What I do now",
    paragraph:
      "Enterprise Customer Success Manager at Connecteam. I own a $2.15M enterprise portfolio across 30 clients, with 105% NRR, 96% GRR, and 99% logo retention. Day to day: customer onboarding, renewals, expansion, and turning recurring friction into process and tools.",
  },
  {
    header: "Path",
    paragraph:
      "Marketing and sales foundation, then customer-facing roles, then CSM. At Gresham & Myers I grew $50K+ new ARR with a 90%+ renewal rate through quarterly business reviews. At MDF Commerce I owned $2M ARR across 50 accounts (97% GRR, 110% NRR, $150K expansion ARR) and built HubSpot systems. At Connecteam I build hands-on, including a Feature Request Matcher that ties client asks to daily release notes.",
  },
  {
    header: "Why building matters",
    paragraph:
      "I ship dashboards, PDF and certificate flows, API helpers, and automations so CS and customers move faster. Feature Request Matcher is the clearest example: calls and release notes become a morning list of who to tell, with a draft email ready. Code unblocks the work. It is not the job title.",
  },
  {
    header: "Why hire me",
    paragraph:
      "For Enterprise and Strategic CSM roles, I bring commercial instincts plus systems thinking. I can sit with a customer, see the pattern, and build the thing that removes it, then prove it in interviews with a live case study.",
  },
  {
    header: "Let's talk",
    paragraph:
      "Start with the Case Studies page for STAR writeups of Connecteam, MDF Commerce, and Gresham & Myers. Resume and LinkedIn are the primary next step. The Feature Request Matcher case study is the fastest product proof. GitHub is there if you want the repos.",
  },
];

const mdfWork = [
  {
    header: "Custom object pipelines",
    paragraph:
      "Structured HubSpot objects so the book of business lived in the CRM, not in a side spreadsheet.",
  },
  {
    header: "Automations",
    paragraph:
      "Moved handoffs, reminders, and status changes without extra clicks from CS.",
  },
  {
    header: "Health scoring",
    paragraph:
      "Made risk visible early enough to act, before a renewal became a surprise.",
  },
  {
    header: "Client onboarding websites",
    paragraph:
      "Gave clients a place to start, instead of a pile of links and a kickoff call.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <TitleBar text="Experience" />
      <SplitGrid
        leftTitle="FAQ"
        rightTitle="Enterprise customer success"
        imageSrc="/profile.jpg"
        priority
        imageAlt="Black and white portrait of Kaleb Jensen"
        subtitle="Enterprise CSM. Builder of the tools around the book."
        links={[
          { href: "/case-studies", label: "Case Studies" },
          { href: site.resume, label: "Resume", external: true },
          { href: site.linkedin, label: "LinkedIn", external: true },
          { href: site.github, label: "GitHub", external: true },
        ]}
      >
        {faq.map((item) => (
          <div key={item.header} className="mb-5 break-inside-avoid">
            <p className="text-xl font-extrabold uppercase">{item.header}</p>
            <p className="leading-relaxed">{item.paragraph}</p>
          </div>
        ))}
      </SplitGrid>
      <SectionBreak />
      <TitleBar text="MDF / HubSpot" as="h2" />
      <SplitGrid
        leftTitle="Systems"
        rightTitle="What I built there"
        imageSrc="/about.jpg"
        imageAlt="Kaleb Jensen traveling, standing outdoors near palm trees and water"
        subtitle="Pipelines. Automations. Health. Onboarding sites."
        links={[
          { href: "/case-studies/mdf-commerce-enterprise-csm", label: "MDF case study" },
          { href: "/projects/hubspot-mdf", label: "HubSpot systems" },
          { href: "/contact", label: "Let's talk" },
        ]}
      >
        {mdfWork.map((item) => (
          <div key={item.header} className="mb-5 break-inside-avoid">
            <p className="text-xl font-extrabold uppercase">{item.header}</p>
            <p className="leading-relaxed">{item.paragraph}</p>
          </div>
        ))}
      </SplitGrid>
    </>
  );
}
