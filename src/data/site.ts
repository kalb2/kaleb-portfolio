export const site = {
  name: "Kaleb Jensen",
  title: "Kaleb Jensen | Enterprise Customer Success Manager",
  url: "https://www.kalebjensen.com",
  description:
    "Enterprise Customer Success Manager at Connecteam focused on SaaS renewals, expansion, and customer onboarding. Builds HubSpot systems and AI workflows.",
  // Public form id only. The recipient inbox stays in Formspree, never here.
  formspreeFormId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "",
  // Set to your real HTTPS booking page to show Book a call on Contact and Hire Me.
  schedulingUrl: "",
  location: "Utah",
  role: "Enterprise CSM",
  company: "Connecteam",
  linkedin: "https://www.linkedin.com/in/kalebjensen/",
  github: "https://github.com/kalb2",
  resume:
    "/resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/hire", label: "Hire Me" },
  { href: "/contact", label: "Contact" },
] as const;
