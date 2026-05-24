import Link from 'next/link'

import { Lock } from 'lucide-react'

import type { CaseStudyMeta } from '@/lib/work'

export function WorkCard({ study }: { study: CaseStudyMeta }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="border-border hover:border-foreground/30 group block rounded-xl border p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold leading-snug group-hover:underline">
              {study.title}
            </h3>
            {study.nda && (
              <span className="text-muted-foreground inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
                <Lock className="h-3 w-3" />
                Confidential
              </span>
            )}
          </div>

          <p className="text-muted-foreground mt-0.5 text-sm">
            {study.organisation} · {study.role} · {study.duration}
          </p>

          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            {study.summary}
          </p>

          {study.outcome && (
            <p className="text-foreground mt-3 text-sm font-medium">
              ↗ {study.outcome}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
