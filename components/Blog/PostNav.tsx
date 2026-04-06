import Link from 'next/link'

import type { PostMeta } from '@/lib/blog'

export function PostNav({
  prev,
  next,
}: {
  prev: PostMeta | null
  next: PostMeta | null
}) {
  return (
    <div className="border-border mt-12 flex justify-between gap-4 border-t pt-6 text-sm">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="text-muted-foreground hover:text-foreground flex flex-col gap-1 transition-colors"
        >
          <span className="text-xs uppercase tracking-wide">← Older</span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="text-muted-foreground hover:text-foreground flex flex-col items-end gap-1 transition-colors"
        >
          <span className="text-xs uppercase tracking-wide">Newer →</span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
