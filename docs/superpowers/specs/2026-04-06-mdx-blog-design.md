# MDX Blog — Design Spec

**Date:** 2026-04-06  
**Status:** Approved

---

## Overview

Add a blog (`/blog`) to the portfolio site using local MDX files. Posts are version-controlled alongside the codebase. The listing page uses a timeline layout; individual post pages use an inline collapsible TOC, staying within `max-w-2xl`.

---

## File Structure

```
content/
  blog/
    *.mdx                          # All blog posts

app/(layout)/
  blog/
    page.tsx                       # /blog — timeline listing
    [slug]/
      page.tsx                     # /blog/[slug] — individual post

components/
  Blog/
    BlogList.tsx                   # Client component: timeline list with tag filter
    TOC.tsx                        # Client component: collapsible TOC with scroll tracking
    PostNav.tsx                    # Prev/next post navigation

lib/
  blog.ts                          # getAllPosts(), getPost(slug)
```

---

## Frontmatter Schema

Each `.mdx` file begins with YAML frontmatter:

```yaml
---
title: "Post Title"
date: "2026-04-06"
description: "Short description shown in the listing."
tags: ["React", "TypeScript"]
---
```

All fields are required. `date` is ISO 8601 (`YYYY-MM-DD`). `tags` is a non-empty array.

---

## Dependencies

| Package | Purpose |
|---|---|
| `next-mdx-remote` | Renders MDX in React Server Components (`next-mdx-remote/rsc`) |
| `gray-matter` | Parses YAML frontmatter from `.mdx` files |
| `reading-time` | Computes "X min read" estimate |
| `rehype-pretty-code` | Syntax highlighting via Shiki |
| `shiki` | Syntax highlighter used by `rehype-pretty-code` |
| `rehype-slug` | Adds `id` attributes to headings |
| `rehype-autolink-headings` | Makes headings into clickable anchor links |
| `remark-gfm` | GitHub Flavored Markdown (tables, task lists, strikethrough) |
| `@tailwindcss/typography` | Prose styles for MDX content |

All installed as production dependencies. `@tailwindcss/typography` is a dev dependency (Tailwind plugin).

---

## Data Layer — `lib/blog.ts`

### `getAllPosts(): PostMeta[]`
- Reads all `.mdx` files from `content/blog/` using Node `fs`
- Parses frontmatter with `gray-matter`
- Computes `readingTime` with `reading-time`
- Derives `slug` from filename (strip `.mdx`)
- Returns array sorted by `date` descending

### `getPost(slug: string): { meta: PostMeta; content: string; headings: Heading[] }`
- Reads the single matching `.mdx` file
- Parses frontmatter and raw content
- Extracts headings (`## h2`, `### h3`) from raw source via regex → `{ id, text, level }[]`
- Returns meta + raw content string (rendered by the page)

### Types

```ts
type PostMeta = {
  slug: string
  title: string
  date: string        // ISO 8601
  description: string
  tags: string[]
  readingTime: string // e.g. "5 min read"
}

type Heading = {
  id: string
  text: string
  level: 2 | 3
}
```

---

## MDX Pipeline

Configured in the post page via `next-mdx-remote/rsc`:

```ts
const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypePrettyCode, {
        themes: { light: 'github-light', dark: 'github-dark' },
      }],
    ],
  },
}
```

Code blocks respect `next-themes` dark/light mode via dual-theme Shiki config.

---

## Listing Page — `/blog`

**Server component.** Calls `getAllPosts()` at build time.

Layout:
```
Blog
Writing about things I build and learn.

[Tag filter: All | React | TypeScript | Go | ...]

  Apr 2026  │  Post Title
             │  Short description...
             │  [Tag] [Tag]  ·  5 min read

  Mar 2026  │  Post Title
             │  ...
```

- Date column shows `Mon YYYY`
- The full row is a link to the post
- `BlogList` is a `"use client"` component that receives all posts from the server and handles tag filtering client-side (no page reload)
- Clicking a tag filters to posts containing that tag; clicking the active tag deselects it
- Empty state message shown when no posts match

---

## Post Page — `/blog/[slug]`

**Server component.** Calls `getPost(slug)`, renders MDX via `MDXRemote`.

Layout (top to bottom, within `max-w-2xl`):

1. `← Back to blog` link
2. Date · reading time
3. `# Title` (h1)
4. Tag badges
5. `TOC` component (collapsible box, expanded by default on desktop, collapsed on mobile)
6. MDX content (wrapped in `prose` class from `@tailwindcss/typography`)
7. `PostNav` component (← older · newer →)

### TOC Component
- `"use client"` — receives `headings` array as prop
- Uses `IntersectionObserver` to track active heading and highlight it
- Collapsible: toggle button on mobile; always expanded on `md+`
- Anchor links use the `id`s added by `rehype-slug`

### PostNav Component
- Server component — receives `prev` and `next` PostMeta (or null)
- Derived in the page by finding the current post's index in `getAllPosts()`

---

## Navbar

Add `{ href: "/blog", label: "Blog" }` to the `links` array in `components/Navbar.tsx`.

---

## Routing Notes

- Post pages use `generateStaticParams()` returning all slugs from `getAllPosts()`
- `generateMetadata()` sets title/description per post using frontmatter
- Both listing and post pages are statically generated at build time

---

## Out of Scope

- Comments
- Search
- RSS feed
- Pagination (add when post count warrants it)
- MDX custom components beyond prose defaults
