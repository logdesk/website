import Link from 'next/link'
import { StackRecognisedIllustration } from './components/StackRecognisedIllustration'
import { FindSignalIllustration } from './components/FindSignalIllustration'
import { NoFileTooLargeIllustration } from './components/NoFileTooLargeIllustration'

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb'
      }}>
        <span style={{ fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em' }}>logdesk</span>
        <Link href="/docs" style={{
          fontSize: '0.875rem', color: '#374151', textDecoration: 'none',
          padding: '0.375rem 0.875rem', border: '1px solid #d1d5db',
          borderRadius: '0.375rem'
        }}>
          Docs
        </Link>
      </nav>

      {/* Hero */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '6rem 2rem 4rem'
      }}>
        <div style={{
          display: 'inline-block', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280',
          background: '#f3f4f6', padding: '0.25rem 0.75rem',
          borderRadius: '9999px', marginBottom: '1.5rem'
        }}>
          For macOS
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.1,
          color: '#111827', margin: '0 0 1.25rem'
        }}>
          Read logs.<br />Not noise.
        </h1>
        <p style={{
          fontSize: '1.125rem', color: '#6b7280', maxWidth: '480px',
          lineHeight: 1.7, margin: '0 0 2.5rem'
        }}>
          Filter, search, and stream local log files — however large.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://pub-3d98399b0e8b4d5bb8a736a4afd4ba05.r2.dev/latest/logdesk_aarch64.dmg" download style={{
            display: 'inline-block', background: '#111827', color: '#fff',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none'
          }}>
            Download Logdesk
          </a>
          <Link href="/docs" style={{
            display: 'inline-block', background: '#fff', color: '#374151',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none',
            border: '1px solid #d1d5db'
          }}>
            Read the docs →
          </Link>
        </div>
      </section>

      {/* Feature: Narrow down with filters */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        maxWidth: '960px', margin: '0 auto', padding: '5rem 2rem',
        alignItems: 'center', borderTop: '1px solid #e5e7eb',
      }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#111827', margin: '0 0 1rem' }}>
            Find the signal.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Filter by log level, keyword, or time range. Get straight to the line that matters — without scrolling through thousands of others.
          </p>
        </div>
        <div style={{ aspectRatio: '4/3' }}>
          <FindSignalIllustration />
        </div>
      </section>

      {/* Feature: Auto detects log files */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        maxWidth: '960px', margin: '0 auto', padding: '5rem 2rem',
        alignItems: 'center', borderTop: '1px solid #e5e7eb',
      }}>
        <div style={{ order: 1 }}>
          <div style={{ aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden' }}>
            <StackRecognisedIllustration />
          </div>
        </div>
        <div style={{ order: 2 }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#111827', margin: '0 0 1rem' }}>
            Your stack, recognised.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Open a log from Nginx, Docker, Rails, or your own service. Logdesk recognises the format and starts reading straight away — no config, no setup.
          </p>
        </div>
      </section>

      {/* Feature: Optimised for performance */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        maxWidth: '960px', margin: '0 auto', padding: '5rem 2rem',
        alignItems: 'center', borderTop: '1px solid #e5e7eb',
      }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#111827', margin: '0 0 1rem' }}>
            No file too large.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Log files grow fast. Logdesk streams and searches through gigabytes without slowing down — even the files you've been putting off opening.
          </p>
        </div>
        <div style={{ aspectRatio: '4/3' }}>
          <NoFileTooLargeIllustration />
        </div>
      </section>

      {/* Feature: Delightful to use */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        maxWidth: '960px', margin: '0 auto', padding: '5rem 2rem',
        alignItems: 'center', borderTop: '1px solid #e5e7eb',
      }}>
        <div style={{ order: 1 }}>
          <div style={{ aspectRatio: '4/3', background: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: '1rem' }} />
        </div>
        <div style={{ order: 2 }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#111827', margin: '0 0 1rem' }}>
            Feels like it should.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Every scroll, filter, and keystroke feels considered. You spend a lot of time in your tools — Logdesk is one worth enjoying.
          </p>
        </div>
      </section>

      <footer style={{
        textAlign: 'center', padding: '1.5rem',
        borderTop: '1px solid #e5e7eb', fontSize: '0.8125rem', color: '#9ca3af'
      }}>
        © {new Date().getFullYear()} Logdesk
      </footer>
    </main>
  )
}
