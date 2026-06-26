'use client'

import dynamic from 'next/dynamic'

export const MermaidDiagramDynamic = dynamic(
  () => import('./MermaidDiagram').then((m) => m.MermaidDiagram),
  { ssr: false },
)
