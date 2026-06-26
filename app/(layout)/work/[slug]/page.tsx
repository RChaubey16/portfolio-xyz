import { notFound } from 'next/navigation'
import Link from 'next/link'

import { Lock } from 'lucide-react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { MermaidDiagramDynamic } from '@/components/MermaidDiagramDynamic'
import { TOC } from '@/components/Blog/TOC'
import { getAllCaseStudies, getCaseStudy } from '@/lib/work'
import { remarkMermaid } from '@/lib/remark-mermaid'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getCaseStudy(slug)
    return { title: meta.title, description: meta.summary }
  } catch {
    return {}
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let study
  try {
    study = getCaseStudy(slug)
  } catch {
    notFound()
  }

  const { meta, content, headings } = study

  return (
    <article className="mt-16">
      <Link
        href="/work"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
      >
        ← Back to work
      </Link>

      {/* Header */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold leading-tight">{meta.title}</h1>
          {meta.nda && (
            <span className="text-muted-foreground inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs">
              <Lock className="h-3 w-3" />
              Confidential
            </span>
          )}
        </div>

        {/* Meta grid */}
        <div className="border-border mt-6 grid grid-cols-2 gap-x-8 gap-y-3 rounded-xl border p-5 text-sm sm:grid-cols-4">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">
              Organisation
            </p>
            <p className="mt-0.5 font-medium">{meta.organisation || '—'}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">
              Role
            </p>
            <p className="mt-0.5 font-medium">{meta.role || '—'}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">
              Duration
            </p>
            <p className="mt-0.5 font-medium">{meta.duration || '—'}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">
              Client
            </p>
            <p className="mt-0.5 font-medium">{meta.client}</p>
          </div>
        </div>

        {/* Outcome callout */}
        {meta.outcome && (
          <div className="bg-accent/40 mt-4 rounded-xl px-5 py-4">
            <p className="text-sm font-medium">↗ {meta.outcome}</p>
          </div>
        )}

        {/* NDA notice */}
        {meta.nda && (
          <div className="border-border bg-muted/30 mt-4 flex items-start gap-2.5 rounded-xl border px-5 py-4">
            <Lock className="text-muted-foreground mt-0.5 h-4 w-4 shrink-0" />
            <p className="text-muted-foreground text-sm">
              Certain project details — including the client name, specific
              metrics, and proprietary implementation details — have been omitted
              or anonymised in accordance with a non-disclosure agreement.
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
          <span className="text-muted-foreground ml-auto text-xs">
            {meta.readingTime}
          </span>
        </div>
      </div>

      <TOC headings={headings} />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MDXRemote
          source={content}
          components={{ Mermaid: MermaidDiagramDynamic }}
          options={
            {
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMermaid],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  [
                    rehypePrettyCode,
                    {
                      themes: {
                        light: 'github-light',
                        dark: 'github-dark',
                      },
                    },
                  ],
                ],
              },
            } as any
          }
        />
      </div>
    </article>
  )
}
