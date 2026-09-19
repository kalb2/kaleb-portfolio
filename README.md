# kalebjensen.com

Personal site for Kaleb Jensen — Enterprise CSM at Connecteam. Built as a clean Next.js App Router + TypeScript + Tailwind app using Nike Circular Design patterns (bordered grid, lined headlines, card handles, section breaks) without cloning the full Nike guide.

## Pages

- `/` — Welcome hero (“Enterprise CSM Who Builds”) and recent projects rail
- `/projects` — Project rail + index
- `/projects/[slug]` — Short case studies (problem / built / outcome)
- `/experience` — FAQ rewrite + dedicated MDF / HubSpot block
- `/about` — Personality grid
- `/contact` — Email, resume, LinkedIn, GitHub

## Preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Deploy on Vercel from this repo. Point `kalebjensen.com` at the production deployment.

## Notes

Old React-hook demo pages and styled-components are gone. Project cards use typographic placeholders until product screenshots are added.
