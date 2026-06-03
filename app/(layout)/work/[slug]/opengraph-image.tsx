import { ImageResponse } from 'next/og'

import { getCaseStudy } from '@/lib/work'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let title = 'Ruturaj Chaubey'
  let role = ''
  let organisation = ''
  let summary = ''

  try {
    const { meta } = getCaseStudy(slug)
    title = meta.title
    role = meta.role
    organisation = meta.organisation
    summary = meta.summary
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          backgroundColor: '#09090b',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <span
            style={{
              fontSize: '14px',
              color: '#71717a',
              background: '#18181b',
              padding: '4px 12px',
              borderRadius: '999px',
            }}
          >
            {organisation || 'Work'}
          </span>
          {role && (
            <span
              style={{
                fontSize: '14px',
                color: '#71717a',
                background: '#18181b',
                padding: '4px 12px',
                borderRadius: '999px',
                marginLeft: '8px',
              }}
            >
              {role}
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fafafa',
            lineHeight: 1.2,
            margin: '0 0 16px 0',
            maxWidth: '900px',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: '20px',
            color: '#a1a1aa',
            margin: '0 0 48px 0',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          {summary.slice(0, 160)}{summary.length > 160 ? '…' : ''}
        </p>
        <p style={{ fontSize: '18px', color: '#52525b', margin: 0 }}>
          ruturajchaubey.com
        </p>
      </div>
    ),
    { ...size },
  )
}
