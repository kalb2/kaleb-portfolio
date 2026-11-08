# kalebjensen.com

Personal site for Kaleb Jensen - Enterprise CSM at Connecteam. Built as a clean Next.js App Router + TypeScript + Tailwind app using Nike Circular Design patterns (bordered grid, lined headlines, card handles, section breaks) without cloning the full Nike guide.

## Pages

- `/` - Welcome hero (“Enterprise CSM Who Builds”) with a Connecteam results strip and recent projects rail
- `/projects` - Project rail + index
- `/projects/[slug]` - Short case studies (problem / built / outcome)
- `/experience` - FAQ rewrite + dedicated MDF / HubSpot block
- `/about` - Personality grid
- `/hire` - Side project offerings, proof links, and the shared inquiry form
- `/contact` - Email, resume, LinkedIn, GitHub, and the shared inquiry form

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

Old React-hook demo pages and styled-components are gone. Project cards use project images, with fictional-data mockups where the underlying work is proprietary.


## Scheduling and inquiries

The single scheduling setting is `site.schedulingUrl` in `src/data/site.ts`.
It defaults to an empty string. Both `/hire` and `/contact` completely hide
"Book a call" until this value is set to a real HTTPS scheduling URL.
Set it to your booking page, then build and review the change before merging.
No scheduling account or booking is created by this site.

The shared `InquiryForm` validates name, email, inquiry type, and message.
Submitting opens a prefilled `mailto:` draft to the existing contact address,
`kalebcj@gmail.com`. It does not send email or store submissions. A configured
email app is required. A prepared-draft link and the direct email address are
shown as a fallback; the direct email links also work without JavaScript.
A real backend such as Formspree or Resend can replace the draft builder later.

Run checks locally with:

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run test:unit
PORT=3533 npx playwright test
```

Always set `PORT` for Playwright when another app occupies port 3100.
