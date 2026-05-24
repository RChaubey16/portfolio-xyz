'use client'

import { useEffect, useRef, useState } from 'react'

import { Maximize2, X } from 'lucide-react'

export function MermaidDiagram({ chart }: { chart: string }) {
  const idRef = useRef(`m${Math.random().toString(36).slice(2, 8)}`)
  const [svg, setSvg] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let active = true

    ;(async () => {
      const { default: mermaid } = await import('mermaid')
      if (!active) return

      const isDark = document.documentElement.classList.contains('dark')
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'neutral',
        fontFamily: 'inherit',
      })

      try {
        const result = await mermaid.render(idRef.current, chart)
        if (active) setSvg(result.svg)
      } catch (err) {
        console.error('[Mermaid]', err)
      }
    })()

    return () => {
      active = false
    }
  }, [chart])

  // Lock body scroll and handle Escape when modal is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Inline diagram */}
      <div
        className="group relative my-6 cursor-zoom-in overflow-x-auto rounded-lg"
        onClick={() => svg && setOpen(true)}
        title="Click to expand"
      >
        {svg ? (
          <div
            className="[&_svg]:h-auto [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <div className="bg-muted animate-pulse rounded-lg py-16" />
        )}

        {svg && (
          <div className="bg-background/80 absolute right-2 top-2 rounded p-1 opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize2 className="text-muted-foreground h-4 w-4" />
          </div>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-background relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-muted-foreground hover:bg-accent absolute right-3 top-3 rounded-full p-1.5 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close diagram"
            >
              <X className="h-4 w-4" />
            </button>

            <div
              className="[&_svg]:h-auto [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svg! }}
            />
          </div>
        </div>
      )}
    </>
  )
}
