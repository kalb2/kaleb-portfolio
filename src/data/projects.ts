export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  angle: string;
  links: { label: string; href: string }[];
  problem: string;
  built: string;
  outcome: string;
  tools: string[];
  pattern: "grid" | "bars" | "rings" | "steps" | "columns" | "slash";
};

export const projects: Project[] = [
  {
    slug: "connecteam-internal-tools",
    number: "001",
    title: "Connecteam Internal Tools",
    tagline: "Dashboard builder, PDF generator, certificate generator, API tool.",
    angle: "CSM who codes for the team.",
    links: [
      { label: "GitHub", href: "https://github.com/kalb2" },
      {
        label: "PDF generator",
        href: "https://github.com/kalb2/connecteam-pdf-generator",
      },
      {
        label: "Certificate app",
        href: "https://github.com/kalb2/certificate-generator",
      },
    ],
    problem:
      "Customer Success work was slowed by the same manual jobs: pulling dashboards, turning form submissions into PDFs, issuing certificates, and poking the API by hand. Friction lived in the process, not in the product.",
    built:
      "A set of internal tools under the connecteam-* repos: a dashboard builder, a PDF generator that turns form submissions into shareable files, a certificate generator with chat delivery, and an API helper so CS can move data without waiting on a ticket.",
    outcome:
      "The team spends less time assembling artifacts and more time with customers. The tools are built by someone who feels the friction first.",
    tools: ["Next.js", "Connecteam API", "Vercel", "PDFs"],
    pattern: "grid",
  },
  {
    slug: "hubspot-mdf",
    number: "002",
    title: "HubSpot / MDF",
    tagline: "Custom objects, automations, health scoring, client onboarding sites.",
    angle: "HubSpot depth from building, not just clicking.",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kalebjensen/" }],
    problem:
      "At MDF, customer work lived in HubSpot — but pipelines, health, and onboarding were not structured enough to scale. Spreadsheets and one-off sites filled the gaps.",
    built:
      "Custom object pipelines, automations that moved work without extra clicks, health scoring so risk showed up early, and onboarding websites clients could actually use.",
    outcome:
      "A cleaner view of the book, faster onboarding, and a HubSpot system that matches how CS actually works.",
    tools: ["HubSpot", "Custom objects", "Automation", "Onboarding sites"],
    pattern: "bars",
  },
  {
    slug: "3d-woodworking",
    number: "003",
    title: "3D Woodworking",
    tagline: "A shop project planned in three dimensions.",
    angle: "Craft and software in the same vice.",
    links: [
      { label: "GitHub", href: "https://github.com/kalb2/3d-woodworking" },
    ],
    problem:
      "Woodworking plans are usually 2D. That is fine until you need to see joinery, scale, and how a piece sits in a room before you cut.",
    built:
      "A 3D woodworking app for visualizing and planning builds — the same instinct as CS tooling: make the next step obvious before you commit.",
    outcome:
      "A shipped side project that treats the shop like a product surface. Repo: github.com/kalb2/3d-woodworking.",
    tools: ["TypeScript", "React", "3D"],
    pattern: "rings",
  },
  {
    slug: "nfl-missed-kick-bot",
    number: "004",
    title: "NFL Missed Kick Bot",
    tagline: "Tweets every missed FG and PAT from ESPN play-by-play.",
    angle: "A small product that runs on Sundays.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kalb2/nfl-missed-kick-bot",
      },
    ],
    problem:
      "Missed field goals and extra points vanish into the play-by-play. There was no clean, automatic alert when a kicker missed.",
    built:
      "A TypeScript bot that polls ESPN’s public NFL APIs, detects missed FGs and PATs, and tweets kicker, distance, result, clock, score, and season tallies. GitHub Actions runs it on game days.",
    outcome:
      "A live side project that ships without babysitting. Repo: github.com/kalb2/nfl-missed-kick-bot.",
    tools: ["TypeScript", "ESPN API", "GitHub Actions", "X API"],
    pattern: "slash",
  },
  {
    slug: "north-shore-current",
    number: "005",
    title: "The North Shore Current",
    tagline: "A local newsletter treated like a product.",
    angle: "Community information, shipped.",
    links: [],
    problem:
      "Local news is fragmented. Neighbors still want a simple current — what happened, what is coming, what is worth knowing.",
    built:
      "A local newsletter product: editorial judgment plus the same systems thinking used on CS tools — cadence, list, and a format people will actually open.",
    outcome:
      "A side project that keeps the builder habit pointed at a real audience, not a demo hook.",
    tools: ["Newsletter", "Editorial", "Audience"],
    pattern: "columns",
  },
  {
    slug: "this-site",
    number: "006",
    title: "This Site",
    tagline: "Circular Design–inspired system, rebuilt clean.",
    angle: "The portfolio, without the playground.",
    links: [{ label: "GitHub", href: "https://github.com/kalb2" }],
    problem:
      "The old kalebjensen.com wore a Nike Circular Design skin over a React-hook playground. Styled-components, demo pages, and career copy about switching to front-end no longer matched the work.",
    built:
      "A clean Next.js App Router + TypeScript + Tailwind rebuild. Same visual language — bordered grid, lined headlines, card handles, section breaks — with CSM-focused content and no interactive hook demos.",
    outcome:
      "A site that represents Enterprise CSM work and the tools that ship around it.",
    tools: ["Next.js", "TypeScript", "Tailwind"],
    pattern: "steps",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
