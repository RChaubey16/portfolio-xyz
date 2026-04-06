'use client'

import { useEffect, useState } from 'react'

import type { Heading } from '@/lib/blog'

export function TOC({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -70% 0px' },
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="border-border my-6 rounded-lg border p-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide"
        aria-expanded={open}
      >
        On this page
        <span className="text-muted-foreground text-base leading-none">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <nav className="mt-3 flex flex-col gap-1.5" aria-label="Table of contents">
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition-colors ${level === 3 ? 'pl-4' : ''} ${
                activeId === id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {text}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}
