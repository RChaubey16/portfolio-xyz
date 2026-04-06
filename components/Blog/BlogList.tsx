'use client'

import Link from 'next/link'
import { useState } from 'react'

import type { PostMeta } from '@/lib/blog'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort()
  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts

  return (
    <div>
      {/* Tag filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-sm transition-colors ${
            !activeTag
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent/50'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              activeTag === tag
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-accent/50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Timeline list */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          No posts found for &quot;{activeTag}&quot;.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[80px_1fr] gap-4"
            >
              <span className="text-muted-foreground pt-0.5 text-sm tabular-nums">
                {formatDate(post.date)}
              </span>
              <div className="border-border group-hover:border-foreground border-l pl-4 transition-colors">
                <h3 className="font-semibold leading-snug group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {post.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent rounded-full px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-muted-foreground text-xs">
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
