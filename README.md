# Muhammad Umer Iqbal — Portfolio

Personal portfolio site for Muhammad Umer Iqbal, AI Engineer.
Live at **https://muhammadumeriqbal.com**.

A client-rendered multi-page React SPA: six routes (Home, Experience, Skills,
Education, Certifications, Projects) sharing a persistent navbar and footer.

## Stack

| Concern    | Choice |
| ---------- | ------ |
| Framework  | React 19 |
| Build      | Vite 8 |
| Language   | TypeScript 5.9 (strict, project references) |
| Styling    | Tailwind CSS 4 — CSS-first `@theme`, **no `tailwind.config.js`** |
| Routing    | React Router 7 (`BrowserRouter`) |
| Animation  | Framer Motion |
| Icons      | Material Symbols (webfont) + lucide-react |
| Hosting    | Vercel |

## Getting started

```bash
npm install
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build  ->  dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

`npm run build` typechecks before bundling, so a type error fails the build.

## Project structure

```
.
├── index.html                  # Single HTML entry. Holds static SEO tags + JSON-LD
├── vite.config.ts              # React + Tailwind plugins; polling file-watcher (see Notes)
├── vercel.json                 # SPA rewrite: all paths -> /index.html
├── eslint.config.js
├── tsconfig.json               # Project refs -> tsconfig.app.json + tsconfig.node.json
├── memory.md                   # Working notes from the redesign (not user-facing docs)
│
├── public/                     # Copied to the build root verbatim, served from /
│   ├── sitemap.xml             # Must stay in sync with the routes in App.tsx
│   ├── robots.txt              # Points crawlers at the sitemap
│   ├── favicon.png · logo.png
│   ├── 11.png                  # Hero portrait; doubles as the Open Graph image
│   ├── Education11.jpg
│   ├── Umer_Iqbal_AI_Engineer_CV.pdf
│   ├── certificates/           # Certificate images — README.txt lists expected filenames
│   └── projects/               # Project thumbnails
│
└── src/
    ├── main.tsx                # Root render: StrictMode > BrowserRouter > App
    ├── App.tsx                 # Route table + persistent chrome (Seo, ScrollToTop, Navbar, Footer)
    ├── index.css               # Tailwind import, @theme design tokens, .ghost-border utility
    │
    ├── pages/                  # One file per route. Thin — they only compose sections
    │   ├── Home.tsx            # /               Hero + Expertise
    │   ├── Experience.tsx      # /experience     Header + Timeline
    │   ├── Skills.tsx          # /skills
    │   ├── Education.tsx       # /education
    │   ├── Certifications.tsx  # /certifications Header + Stats + Grid
    │   └── Projects.tsx        # /projects
    │
    ├── components/
    │   ├── layout/             # Site-wide chrome, rendered once in App.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   ├── ScrollToTop.tsx # Resets scroll on route change
    │   │   └── Seo.tsx         # Applies per-route metadata (see SEO below)
    │   ├── common/             # Shared across pages
    │   │   └── DrawUnderline.tsx  # Animated underline used by every page header
    │   ├── home/               # Hero.tsx · Expertise.tsx (renders StatsBar.tsx)
    │   ├── experience/         # ExperienceHeader.tsx · ExperienceTimeline.tsx
    │   ├── skills/             # SkillsHeader.tsx · SkillsGrid.tsx
    │   ├── education/          # EducationHeader.tsx · EducationGrid.tsx
    │   ├── certifications/     # CertificationsHeader.tsx · CertStats.tsx · CertificationsGrid.tsx
    │   └── projects/           # ProjectsHeader.tsx · ProjectsGrid.tsx
    │
    ├── hooks/
    │   ├── useTypewriter.ts    # Cycling typewriter effect in the hero headline
    │   └── useCountUp.ts       # Scroll-triggered number count-up for stat blocks
    │
    └── seo/
        └── seo.config.ts       # Title + description for every route
```

### Conventions

- **Pages are composition only.** A file in `src/pages/` sets the page's layout
  container and renders section components; all content and markup live in
  `src/components/<page>/`. Adding a section means adding a component there, not
  growing the page file.
- **Content is colocated with its component.** There is no CMS or data layer —
  the timeline entries, skill lists, certifications, and projects are `const`
  arrays at the top of the component that renders them. Edit content there.
- **One component per file**, named export, matching the filename.

## Design system

"Alexandria — High-End Editorial": light, serif headlines, tonal surface
layering, no hard borders.

All tokens live in the `@theme` block of [`src/index.css`](src/index.css) as
Material-style semantic colors (`--color-primary`, `--color-surface-container-*`,
`--color-on-surface-variant`, …), which Tailwind 4 exposes as utilities —
`bg-surface-container-low`, `text-on-surface-variant`, and so on. Tailwind 4 is
configured entirely in CSS; there is no `tailwind.config.js` to look for.

Boundaries use the `.ghost-border` utility (a low-opacity outline) rather than a
hard 1px line. Font roles map to `font-headline`, `font-body`, and `font-label`.

## SEO

Metadata is defined once in [`src/seo/seo.config.ts`](src/seo/seo.config.ts) and
applied two ways:

- **Statically in `index.html`** — title, description, canonical, Open Graph,
  Twitter Card, and a JSON-LD `@graph` (`Person` + `WebSite`). Because this is a
  client-rendered SPA, the raw HTML is all that non-JS crawlers and link
  unfurlers (Slack, LinkedIn, WhatsApp) ever see.
- **Per route at runtime** by [`Seo.tsx`](src/components/layout/Seo.tsx), which
  upserts those same tags on navigation. Tags are updated imperatively rather
  than rendered as JSX so there is exactly one `<title>`/`<meta>` of each kind —
  a rendered duplicate would leave the stale static tag first in the document,
  and first is the copy consumers read.

**Adding a route** means touching four places: the `<Route>` in `App.tsx`, the
page in `src/pages/`, an entry in `seo.config.ts`, and a `<url>` in
`public/sitemap.xml`.

Known limitation: every route serves the same static HTML, so a crawler that
does not execute JS sees the home page's metadata on a deep link. Google renders
JS and indexes the per-route values correctly; social unfurlers generally do not.
Prerendering or a move to SSR would be the fix if deep links need to unfurl.

## Deployment

Vercel, building with `npm run build` and serving `dist/`.
[`vercel.json`](vercel.json) rewrites every path to `/index.html` so client-side
routes survive a hard refresh. Vercel checks the filesystem before applying
rewrites, so `/sitemap.xml` and `/robots.txt` still serve as real files.

## Notes

- **Windows dev server.** `vite.config.ts` sets `server.watch.usePolling` because
  Windows `fs.watch` throws `EBUSY` and kills the dev server when a file in
  `public/` is briefly locked by an image editor, cloud sync, or antivirus. A
  public image added while the server runs may still need a hard refresh.
- **Adding a certificate or project image**: drop the file in
  `public/certificates/` or `public/projects/` and reference it from the matching
  grid component. `public/certificates/README.txt` lists the expected filenames.
  A card whose image is missing hides the image rather than erroring.
