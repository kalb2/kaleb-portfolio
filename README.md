# kalebjensen.com

Personal site for Kaleb Jensen - Enterprise CSM at Connecteam. Built as a clean Next.js App Router + TypeScript + Tailwind app using Nike Circular Design patterns (bordered grid, lined headlines, card handles, section breaks) without cloning the full Nike guide.

## Pages

- `/` - Welcome hero (“Enterprise CSM Who Builds”) with a Connecteam results strip and recent projects rail
- `/projects` - Project rail + index
- `/projects/[slug]` - Short case studies (problem / built / outcome)
- `/experience` - FAQ rewrite + dedicated MDF / HubSpot block
- `/about` - Personality grid
- `/hire` - Side project offerings, proof links, and the shared inquiry form
- `/contact` - Resume, LinkedIn, GitHub, and the shared inquiry form

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

The shared `InquiryForm` sends name, reply address, inquiry type, and message
through Formspree, with a subject and a hidden spam trap. It shows inline
success or error feedback and prevents duplicate sends while submitting.
No recipient inbox address belongs in this repository or the browser.

### Formspree setup

1. Sign up at [formspree.io](https://formspree.io).
2. Create a form with the inbox you want to receive inquiries. Formspree keeps
   that recipient address private. Complete any inbox verification it requests.
3. Copy just the form id from the endpoint URL, for example `xyzabcd` from
   `https://formspree.io/f/xyzabcd`.
4. Set `NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabcd` in `.env.local` for local work,
   or set the same environment variable in Vercel for the desired environment.
   This populates `site.formspreeFormId` in `src/data/site.ts`. The value defaults
   to an empty string. The id is public, not a secret; do not use an inbox address.
5. Rebuild and review the site after setting it. Next.js embeds public variables
   at build time, so changing the variable requires a new build. Do not merge
   or deploy to production until approved.

Until the id is supplied, neither `/contact` nor `/hire` renders a form.
Both show a LinkedIn link instead. The production default remains empty.

### Form testing

For the empty-id regression checks, build with
`NEXT_PUBLIC_FORMSPREE_FORM_ID= npm run build` if `.env.local` already has an id.
Playwright starts that empty-id production build on `PORT` and a separate
configured-form build on `PORT + 1`. The configured build uses the test-only id
`e2e-test-form` in `.next-formspree-test`. Form tests intercept every Formspree
request and never contact the real service. The alternate output folder is
selected by `NEXT_BUILD_DIR` and is ignored by Git. If testing a remote base URL,
provide a separate configured test server with `E2E_FORM_BASE_URL` as well.

Run checks locally with:

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run test:unit
PORT=3533 npx playwright test
```

Always set `PORT` for Playwright when another app occupies port 3100.
