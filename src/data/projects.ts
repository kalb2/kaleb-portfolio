export type CaseStudyStep = {
  title: string;
  body: string;
};

export type CaseStudyStackItem = {
  name: string;
  detail: string;
  mark: "attention" | "chatgpt" | "sheets" | "gmail";
};

export type CaseStudy = {
  pitch: string;
  context: string;
  situation: string;
  action: string;
  steps: CaseStudyStep[];
  results: string[];
  stack: CaseStudyStackItem[];
  next: string;
  screenshots: { src: string; alt: string; label: string }[];
  download: { label: string; href: string };
};

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
  pattern: "grid" | "bars" | "rings" | "steps" | "columns" | "slash" | "loop";
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "feature-request-matcher",
    number: "001",
    title: "Feature Request Matcher",
    tagline: "Which clients asked for what just shipped.",
    angle: "Enterprise CSM proof.",
    links: [
      {
        label: "One-pager PDF",
        href: "/Feature_Request_Matcher_OnePager.pdf",
      },
    ],
    problem:
      "Across about 80 enterprise accounts, clients ask for features constantly during day-to-day calls. Those asks are easy to lose, and when a feature finally ships, it is hard to remember which client asked for it. Meanwhile, multiple release note emails arrive every day.",
    built:
      "I spotted the gap and built the automation myself, with ChatGPT's help. It logs feature requests from client calls, tallies them in a Google Sheet, and each morning checks release notes against every request on record.",
    outcome:
      "By the next morning after a release, I know which clients to tell. The loop closes, drafts are ready to review and send, and the tally shows which asks come up most across the book.",
    tools: ["Attention AI API", "ChatGPT", "Google Sheets", "Gmail"],
    pattern: "loop",
    caseStudy: {
      pitch:
        "I turned everyday client calls and daily release notes into an automated loop that tells me each morning which clients asked for what just shipped, with an email ready to send.",
      context:
        "Kaleb Jensen, Enterprise Customer Success Manager at Connecteam. $1.76M portfolio across about 80 enterprise accounts.",
      situation:
        'Across about 80 enterprise accounts, clients ask for features constantly during day-to-day calls. Those asks are easy to lose, and when a feature finally ships, it is hard to remember which client asked for it. Meanwhile, multiple release note emails arrive every day. Without a system, the moment to go back and say "you asked, we delivered" slips by. My task: make sure no request gets lost and every client hears back when their feature ships.',
      action:
        "I spotted the gap and built the automation myself, with ChatGPT's help. It captures feature requests straight from my client calls, logs and tallies them by client in a Google Sheet, and each morning checks the latest release notes against every request on record. It tells me which clients asked for a feature that just shipped and drafts a short email so I can let them know.",
      steps: [
        {
          title: "Capture from calls",
          body: "The Attention AI API pulls my day-to-day client calls and extracts the feature requests mentioned in them.",
        },
        {
          title: "Log in one place",
          body: "Each request goes into a Google Sheet organized by client, who asked for it, and what the feature is.",
        },
        {
          title: "Match and tally",
          body: "New requests are checked against existing ones and matched up, keeping a running tally of how often each type of feature is requested.",
        },
        {
          title: "Morning release check",
          body: "Gmail is connected to ChatGPT through a scheduled action. Every morning it reviews the release note emails from the last 24 hours against all-time feature requests.",
        },
        {
          title: "Recommend and draft",
          body: 'It recommends which clients asked for features that are now released and drafts a basic email explaining the release, so I know who to contact and can send a quick "the feature you asked for is live" note.',
        },
      ],
      results: [
        "By the next morning after a release, I know exactly which clients to tell.",
        "Closes the loop with clients who took the time to ask for something.",
        "Scales proactive, personal outreach across a large enterprise book.",
        "Draft outreach is ready to review and send, not written from scratch.",
        "The request tally shows which asks come up most across accounts.",
      ],
      stack: [
        {
          name: "Attention AI API",
          detail: "Call capture and extraction",
          mark: "attention",
        },
        {
          name: "ChatGPT",
          detail: "Built the system and analysis",
          mark: "chatgpt",
        },
        {
          name: "Google Sheets",
          detail: "Request log and tally",
          mark: "sheets",
        },
        {
          name: "Gmail + ChatGPT scheduled action",
          detail: "Daily release check and drafts",
          mark: "gmail",
        },
      ],
      next: "Harden the request matching and reduce the manual steps before sending.",
      screenshots: [
        {
          src: "/case-studies/feature-request-matcher/google-sheet-columns.webp",
          alt: "Mockup of a Google Sheet with columns for client, who asked, feature, request type, and status. Names are redacted.",
          label:
            "Mock: Google Sheet columns (client / who asked / feature)",
        },
        {
          src: "/case-studies/feature-request-matcher/morning-recommendation.webp",
          alt: "Mockup of a ChatGPT morning briefing that recommends which clients to contact after a release.",
          label: "Mock: Morning ChatGPT recommendation",
        },
        {
          src: "/case-studies/feature-request-matcher/draft-email.webp",
          alt: "Mockup of a draft email saying the requested feature is live. The client name and address are blurred.",
          label: "Mock: Sample draft email (blurred client names)",
        },
      ],
      download: {
        label: "One-pager PDF",
        href: "/Feature_Request_Matcher_OnePager.pdf",
      },
    },
  },
  {
    slug: "connecteam-internal-tools",
    number: "002",
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
      "CS spends less time assembling dashboards, PDFs, and certificates and more time with customers. The shortcuts exist because the person who felt the friction built them.",
    tools: ["Next.js", "Connecteam API", "Vercel", "PDFs"],
    pattern: "grid",
  },
  {
    slug: "hubspot-mdf",
    number: "003",
    title: "HubSpot / MDF",
    tagline: "Custom objects, automations, health scoring, client onboarding sites.",
    angle: "HubSpot depth from building, not just clicking.",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kalebjensen/" }],
    problem:
      "At MDF, customer work lived in HubSpot, but pipelines, health, and onboarding were not structured enough to scale. Spreadsheets and one-off sites filled the gaps.",
    built:
      "Custom object pipelines, automations that moved work without extra clicks, health scoring so risk showed up early, and onboarding websites clients could actually use.",
    outcome:
      "A cleaner view of the book, faster onboarding, and a HubSpot system that matches how CS actually works.",
    tools: ["HubSpot", "Custom objects", "Automation", "Onboarding sites"],
    pattern: "bars",
  },
  {
    slug: "3d-woodworking",
    number: "004",
    title: "3D Woodworking",
    tagline: "A shop project planned in three dimensions.",
    angle: "Craft and software in the same vice.",
    links: [
      { label: "GitHub", href: "https://github.com/kalb2/3d-woodworking" },
    ],
    problem:
      "Woodworking plans are usually 2D. That is fine until you need to see joinery, scale, and how a piece sits in a room before you cut.",
    built:
      "A 3D woodworking app for visualizing and planning builds. The same instinct as CS tooling: make the next step obvious before you commit.",
    outcome:
      "A shipped side project that treats the shop like a product surface. Repo: github.com/kalb2/3d-woodworking.",
    tools: ["TypeScript", "React", "3D"],
    pattern: "rings",
  },
  {
    slug: "nfl-missed-kick-bot",
    number: "005",
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
    number: "006",
    title: "The North Shore Current",
    tagline: "A 5-minute local briefing, treated like a product.",
    angle: "Community information, shipped.",
    links: [],
    problem:
      "Local coverage around Saratoga Springs, Lehi, and Eagle Mountain is fragmented. Neighbors still want a simple current: what happened, what is coming, and what is worth knowing.",
    built:
      "A real local briefing for that area, on a repeatable cadence. Editorial judgment plus the same systems thinking used on CS tools: a defined audience, a list, and a short format people will actually open.",
    outcome:
      "Neighbors in Saratoga Springs, Lehi, and Eagle Mountain get a short briefing they can count on. The work is a product with a cadence, not a one-off demo.",
    tools: ["Newsletter", "Editorial", "Audience"],
    pattern: "columns",
  },
  {
    slug: "this-site",
    number: "007",
    title: "This Site",
    tagline: "Circular Design inspired system, rebuilt clean.",
    angle: "The portfolio, without the playground.",
    links: [{ label: "GitHub", href: "https://github.com/kalb2" }],
    problem:
      "The old kalebjensen.com wore a Nike Circular Design skin over a React-hook playground. Styled-components, demo pages, and career copy about switching to front-end no longer matched the work.",
    built:
      "A clean Next.js App Router + TypeScript + Tailwind rebuild. Same visual language (bordered grid, lined headlines, card handles, section breaks) with CSM-focused content and no interactive hook demos.",
    outcome:
      "A site that represents Enterprise CSM work and the tools that ship around it.",
    tools: ["Next.js", "TypeScript", "Tailwind"],
    pattern: "steps",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
