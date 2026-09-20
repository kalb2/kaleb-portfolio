import type { Metadata } from "next";
import { SectionBreak } from "@/components/SectionBreak";
import { SplitGrid } from "@/components/SplitGrid";
import { TitleBar } from "@/components/TitleBar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Husband. Dad. CSM. Woodworker. Traveler. Coding is how the tools ship.",
};

export default function AboutPage() {
  return (
    <>
      <TitleBar text="About Me" />
      <SplitGrid
        leftTitle="Bio"
        rightTitle={site.name}
        imageSrc="/about.jpg"
        imageAlt="Travel photograph"
        subtitle="Husband. Dad. CSM. Woodworker. Traveler."
        links={[
          { href: site.linkedin, label: "LinkedIn", external: true },
          { href: site.github, label: "GitHub", external: true },
        ]}
      >
        <p className="mb-5 leading-relaxed">
          Coding is how I ship tools and side projects. It is not the career
          identity. The job is Enterprise Customer Success — onboard, retain,
          grow — and the builder habit is what removes friction for the team
          and the customer.
        </p>
        <p className="mb-5 leading-relaxed">
          Off the clock: family, the shop, and the next trip. I would not call
          myself an expert in any of those, which is why this is still one of
          my favorite lines:
        </p>
        <p className="mb-5 text-xl uppercase">
          “All I know is that I know nothing.” — Socrates
        </p>
        <p className="mb-5 leading-relaxed">
          No matter how much I learn, there is just as much I still do not. I
          try to keep that in view and keep building anyway.
        </p>
      </SplitGrid>
      <SectionBreak />
    </>
  );
}
