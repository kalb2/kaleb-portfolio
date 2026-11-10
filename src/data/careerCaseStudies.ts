export type CareerCaseStudy = {
  slug: string;
  number: string;
  company: string;
  role: string;
  dates: string;
  headline: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  results: string[];
  relatedProjects: { href: string; label: string }[];
};

/**
 * Recruiter-facing STAR case studies. Numbers are only those approved from
 * the Oct 19 2026 resume. Do not invent metrics, clients, prices, or quotes.
 */
export const careerCaseStudies: CareerCaseStudy[] = [
  {
    slug: "connecteam-enterprise-csm",
    number: "001",
    company: "Connecteam",
    role: "Enterprise Customer Success Manager",
    dates: "11/2025 to present",
    headline: "Retention, expansion, and adoption across a $2.15M enterprise book",
    summary:
      "Own a $2.15M enterprise portfolio across 30 clients. Drive renewals, expansion, and platform adoption, and build the internal tools that remove delivery friction.",
    situation:
      "An enterprise book of 30 clients needed steady retention and expansion, plus faster delivery when accounts depended on custom integrations and data migrations. Feature asks from day-to-day calls were easy to lose against a stream of release notes.",
    task:
      "Own renewals, expansion, and adoption across the portfolio. Turn recurring friction into process and tools the CS team can reuse, without inventing work that lives only in a spreadsheet.",
    action:
      "Drove platform adoption with custom API integrations. Built internal tooling and process frameworks that sped up data-migration delivery. Captured feature requests from client calls and matched them to morning release notes so clients heard back when their ask shipped. See the Connecteam Internal Tools and Feature Request Matcher project pages for the builds.",
    results: [
      "$2.15M enterprise portfolio across 30 clients",
      "105% net revenue retention (NRR)",
      "96% gross revenue retention (GRR)",
      "99% logo retention",
      "+35% platform adoption via custom API integrations",
      "15% faster data-migration delivery via internal tooling and process frameworks",
    ],
    relatedProjects: [
      {
        href: "/projects/connecteam-internal-tools",
        label: "Connecteam Internal Tools",
      },
      {
        href: "/projects/feature-request-matcher",
        label: "Feature Request Matcher",
      },
    ],
  },
  {
    slug: "mdf-commerce-enterprise-csm",
    number: "002",
    company: "MDF Commerce",
    role: "Enterprise Customer Success Manager",
    dates: "10/2023 to 11/2025",
    headline: "Scaled onboarding and HubSpot CS ops across a $2M ARR book",
    summary:
      "Owned $2M ARR across 50 accounts. Built HubSpot pipelines, automations, health scoring, and onboarding sites, and scaled mid-market onboarding from 1:1 sessions into monthly webinars.",
    situation:
      "Customer work lived in HubSpot, but pipelines, health, and onboarding were not structured enough to scale. Mid-market onboarding still depended on 1:1 sessions that could not keep up with demand.",
    task:
      "Protect and grow a $2M ARR book across 50 accounts. Make risk visible early, move handoffs without extra clicks, and give more customers a clear place to start without adding headcount to every kickoff.",
    action:
      "Built HubSpot custom object pipelines, automations, and health scoring so the book lived in the CRM. Shipped client onboarding websites. Scaled 1:1 onboarding sessions into monthly webinars for 30+ customers. The HubSpot / MDF project page covers the systems build.",
    results: [
      "$2M ARR across 50 accounts",
      "97% gross revenue retention (GRR)",
      "110% net revenue retention (NRR)",
      "$150K expansion ARR",
      "+300% mid-market onboarding by scaling 1:1 sessions into monthly webinars for 30+ customers",
    ],
    relatedProjects: [
      { href: "/projects/hubspot-mdf", label: "HubSpot / MDF" },
    ],
  },
  {
    slug: "gresham-myers-account-management",
    number: "003",
    company: "Gresham & Myers",
    role: "Account Manager / Customer Success Manager",
    dates: "06/2020 to 10/2023",
    headline: "New ARR and renewals through a quarterly business review rhythm",
    summary:
      "Grew $50K+ in new ARR and held a 90%+ renewal rate by running a repeatable quarterly business review process.",
    situation:
      "Accounts needed a predictable way to review value, surface risk, and find expansion before renewal, instead of ad hoc check-ins that drifted.",
    task:
      "Grow new ARR while protecting renewals. Install a review rhythm customers and the internal team could count on each quarter.",
    action:
      "Built and ran a quarterly business review process. Used each QBR to confirm outcomes, flag risk early, and identify where new work belonged, then carried those actions into the next quarter.",
    results: [
      "$50K+ new ARR",
      "90%+ renewal rate via a quarterly business review process",
    ],
    relatedProjects: [{ href: "/experience", label: "Experience overview" }],
  },
];

export function getCareerCaseStudy(slug: string) {
  return careerCaseStudies.find((study) => study.slug === slug);
}
