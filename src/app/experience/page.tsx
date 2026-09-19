import type { Metadata } from "next";
import { SectionBreak } from "@/components/SectionBreak";
import { SplitGrid } from "@/components/SplitGrid";
import { TitleBar } from "@/components/TitleBar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Enterprise CSM at Connecteam. Marketing and sales path, HubSpot depth from MDF, and tools that ship.",
};

const faq = [
  {
    header: "What I do now",
    paragraph:
      "Enterprise Customer Success Manager at Connecteam. I onboard, retain, and grow customers. I partner with product and support, and I turn friction into process and tools.",
  },
  {
    header: "Path",
    paragraph:
      "Marketing and sales foundation, then customer-facing roles, then CSM. HubSpot depth from MDF. Hands-on building at Connecteam.",
  },
  {
    header: "Why building matters",
    paragraph:
      "I ship dashboards, PDF and certificate flows, and API helpers so CS and customers move faster. Code is how the work gets unblocked — not the job title.",
  },
  {
    header: "Why hire me",
    paragraph:
      "Commercial instincts plus systems thinking. I can sit with a customer, see the pattern, and build the thing that removes it.",
  },
  {
    header: "Let's talk",
    paragraph:
      "Resume and LinkedIn are the primary next step. GitHub is there if you want to see how the tools are built.",
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
      "Made risk visible early enough to act — before a renewal became a surprise.",
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
        rightTitle="What is my background?"
        imageSrc="/profile.jpg"
        imageAlt="Kaleb Jensen"
        subtitle="Enterprise CSM. Builder of the tools around the book."
        links={[
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
      <TitleBar text="MDF / HubSpot" />
      <SplitGrid
        leftTitle="Systems"
        rightTitle="What I built there"
        imageSrc="/about.jpg"
        imageAlt="Travel photograph"
        subtitle="Pipelines. Automations. Health. Onboarding sites."
        links={[
          { href: "/projects/hubspot-mdf", label: "Case study" },
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
