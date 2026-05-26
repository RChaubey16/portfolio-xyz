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
  (layout)/         # Pages with Navbar + Footer (main site)
    page.tsx        # Home
    About/
    Experience/
    gallery/
    gears/
    movies/
    projects/
    resume/
    work/
  (no-layout)/      # Pages without Navbar/Footer
    studio/         # Sanity Studio
  api/              # API routes
  globals.css       # Global styles (Tailwind base)

components/
  ui/               # Shadcn UI primitives (accordion, badge, button, card, tooltip)
  animation/        # Reusable animation wrappers (Fade, FadeUp, Particles, Roles)
  Navbar.tsx
  Footer.tsx
  FooterFadeUp.tsx
  TechCard.tsx / TechIcon.tsx / Technologies.tsx / TechUsed.tsx
  MediaCard.tsx / SocialCard.tsx / TextCard.tsx
  SidebarIcons.tsx
  mode-toggle.tsx
  theme-provider.tsx

data/
  config.json       # All static site content: nav, tech list, experience, profile/socials
  newConfig.json    # (draft/staging config)
  supabase.ts       # Supabase client
  utils.ts          # Data utilities

lib/
  utils.ts          # cn(), getIndiaTimeLabel(), formatNumber()

sanity/
  schemaTypes/      # Sanity content schemas (currently: photoType)
  lib/              # Sanity client, image builder, live preview
  sanity.config.ts
  sanity.cli.ts

types/
  project.ts        # TypeScript types for Sanity-sourced project data
```

## Key Conventions

### Styling
- Tailwind CSS v4 — utility-first, no CSS modules
- Use `cn()` from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- Fonts: `DM_Sans` (sans) and `Geist_Mono` (mono), exposed as CSS variables `--font-sans` / `--font-mono`
- Dark mode via `next-themes` with `ThemeProvider` (attribute: `class`)

### Content / Data
- Static content (nav links, tech stack, experience entries, profile) lives in `data/config.json` — edit there, not hardcoded in components
- Dynamic content (projects, photos) fetched from **Sanity CMS** via `@sanity/client`
- Images from Sanity use `@sanity/image-url`; allowed remote image hostnames are whitelisted in `next.config.ts`

### Routing
- Route groups `(layout)` and `(no-layout)` control whether the global Navbar/Footer wrap applies
- Sanity Studio is at `/studio` (no-layout group)
- Max content width: `max-w-2xl` centered with `px-4 md:px-0`

### Animations
- **Motion** (Framer Motion v12) for general animations
- **GSAP** for complex/scroll-based animations
- Reusable wrappers: `components/animation/Fade.tsx`, `FadeUp.tsx`, `Particles.tsx`, `Roles.tsx`

### UI Components
- Shadcn UI primitives in `components/ui/` — extend/edit these, don't replace
- `react-icons` for icons alongside `lucide-react`

### External Integrations
- **Supabase** — client in `data/supabase.ts`
- **GitHub Calendar** — `react-github-calendar`
- **Sanity** — CMS for projects/photos; Studio embedded at `/studio`

## Deployment
- Hosted on **Vercel**
- Live site: `https://ruturajchaubey.com`
- GitHub repo (referenced in nav config): `https://github.com/RChaubey16/ruturaj-xyz`
