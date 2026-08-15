import { ImageResponse } from 'next/og'

// Generated at request time by Satori, so there is no static asset to keep in
// sync. This is what LinkedIn, X and Slack render when the link is shared —
// previously they rendered nothing, because no OG image was declared at all.

export const alt = 'Lakshya Bhardwaj — Backend & Platform Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0D0D0D',
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(139,126,200,0.22), transparent 46%), radial-gradient(circle at 84% 82%, rgba(201,169,98,0.18), transparent 44%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: '#4ADE80',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#888888',
            }}
          >
            Available
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
              color: '#E8E8E8',
            }}
          >
            LAKSHYA
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 40,
              fontWeight: 300,
              color: '#C9A962',
            }}
          >
            Backend &amp; Platform Engineer
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 28,
              color: '#888888',
            }}
          >
            Systems that ship. Pipelines that hold.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1F1F1F',
            paddingTop: 28,
            fontSize: 24,
            color: '#666666',
          }}
        >
          {/* Keep this a place that actually exists. Swap to the custom
              domain once it's registered and pointed. */}
          <div style={{ display: 'flex' }}>github.com/LAKSHYA1509</div>
          <div style={{ display: 'flex', gap: 28 }}>
            <div style={{ display: 'flex' }}>NestJS</div>
            <div style={{ display: 'flex' }}>Spring Boot</div>
            <div style={{ display: 'flex' }}>Postgres</div>
            <div style={{ display: 'flex' }}>Docker</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
