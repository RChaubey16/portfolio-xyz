# CLAUDE.md — portfolio-xyz

Personal portfolio site for Ruturaj Chaubey. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Sanity CMS.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm format       # Prettier (write)
pnpm format:check # Prettier (check)
```

Package manager: **pnpm** (do not use npm or yarn).

## Project Structure

```
app/
  (layout)/         # Pages sharing the root layout (Footer only, no navbar)
    page.tsx        # Home — Intro
    work/
      page.tsx      # Companies + Projects list
      [slug]/       # Case studies (MDX, from content/work)
    globals.css     # Global styles (Tailwind base, light theme only)
  (no-layout)/      # Pages without the site chrome
    studio/         # Sanity Studio
  api/              # API routes
  sitemap.ts

components/
  ui/               # Shadcn UI primitives (badge, tooltip)
  animation/        # Reusable animation wrappers (FadeUp)
  Intro.tsx         # Home intro section
  CompanyBadge.tsx
  Footer.tsx
  FooterFadeUp.tsx
  Work/WorkItem.tsx
  Work/TOC.tsx      # Table of contents for work case-study pages
  MermaidDiagram(Dynamic).tsx

data/
  newConfig.json    # All static site content: profile, socials, experience, projects, tech, movies, gears

lib/
  utils.ts          # cn()
  work.ts           # Reads MDX case studies from content/work
  remark-mermaid.ts

sanity/
  schemaTypes/      # Sanity content schemas (currently: photoType)
  lib/              # Sanity client, image builder, live preview
  sanity.config.ts
  sanity.cli.ts
```

The site is intentionally minimal: **Home** (intro) and **Work** (companies, projects, and MDX case studies) are the only routes. There is no navbar and no dark theme.

## Key Conventions

### Styling

- Tailwind CSS v4 — utility-first, no CSS modules
- Use `cn()` from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- Fonts: `Inter` (sans) and `Geist_Mono` (mono), exposed as CSS variables `--font-sans` / `--font-mono`
- **Light theme only** — there is no dark mode, no theme toggle, and no `next-themes` dependency. Don't reintroduce `dark:` variants or a `.dark` class.

### Content / Data

- All static content (profile, socials, experience, projects, tech list, movies, gears) lives in `data/newConfig.json` — edit there, not hardcoded in components
- Work case studies are MDX files in `content/work/`, read via `lib/work.ts`
- Sanity Studio (`/studio`) remains available for CMS content, but no page currently renders Sanity-sourced content

### Routing

- Route groups `(layout)` and `(no-layout)` control whether the shared Footer wrap applies
- Sanity Studio is at `/studio` (no-layout group)
- Max content width: `max-w-2xl` / `max-w-xl` centered with `px-4 md:px-0`

### Animations

- **Motion** (Framer Motion v12) for animations
- Reusable wrapper: `components/animation/FadeUp.tsx`

### UI Components

- Shadcn UI primitives in `components/ui/` — extend/edit these, don't replace
- `react-icons` for icons alongside `lucide-react`

## Deployment

- Hosted on **Vercel**
- Live site: `https://ruturajchaubey.com`
- GitHub repo (referenced in nav config): `https://github.com/RChaubey16/ruturaj-xyz`
