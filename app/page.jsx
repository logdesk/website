import Link from 'next/link'
import Image from 'next/image'
import { StackRecognisedIllustration } from './components/StackRecognisedIllustration'
import { FindSignalIllustration } from './components/FindSignalIllustration'
import { NoFileTooLargeIllustration } from './components/NoFileTooLargeIllustration'
import { StaysLocalIllustration } from './components/StaysLocalIllustration'

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      {/* Nav */}
      <nav className="nav-mobile" style={{}}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: '960px', margin: '0 auto', padding: '1rem 2rem'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/logo.png" alt="Logdesk" width={32} height={32} />
            <span style={{ fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em' }}>Logdesk</span>
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/pricing" className="nav-link" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>
              Pricing
            </Link>
            <Link href="/docs" className="nav-link" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>
              Docs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-mobile" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '6rem 2rem 4rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.1,
          color: '#1f2937', margin: '0 0 1.25rem'
        }}>
          Logs without the chaos.
        </h1>
        <p style={{
          fontSize: '1.125rem', color: '#6b7280', maxWidth: '480px',
          lineHeight: 1.7, margin: '0 0 2.5rem'
        }}>
          Filter, search, and stream local log files.
        </p>
        <div style={{ marginBottom: '2.5rem', width: '100%', maxWidth: '960px' }}>
          <Image
            src="/app.png"
            alt="Logdesk app screenshot"
            width={2922}
            height={2010}
            priority
            style={{
              width: '100%', height: 'auto', borderRadius: '0.75rem',
              border: '1px solid #e5e7eb', boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15)'
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://pub-3d98399b0e8b4d5bb8a736a4afd4ba05.r2.dev/latest/logdesk_aarch64.dmg" download className="btn-primary" style={{
            display: 'inline-block', background: '#1f2937', color: '#fff',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none'
          }}>
            Download for Mac
          </a>
          <Link href="/docs" className="btn-secondary" style={{
            display: 'inline-block', background: '#fff', color: '#1f2937',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none',
            border: '1px solid #d1d5db'
          }}>
            Read the docs →
          </Link>
        </div>
      </section>

      {/* Feature: Narrow down with filters */}
      <section className="feature-section">
        <div className="feature-text">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#1f2937', margin: '0 0 1rem' }}>
            Find the signal.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Filter by log level, keyword, or time range. Get straight to the line that matters — without scrolling through thousands of others.
          </p>
        </div>
        <div className="feature-illustration" style={{ aspectRatio: '4/3' }}>
          <FindSignalIllustration />
        </div>
      </section>

      {/* Feature: Auto detects log files */}
      <section className="feature-section reverse">
        <div className="feature-illustration">
          <div style={{ aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden' }}>
            <StackRecognisedIllustration />
          </div>
        </div>
        <div className="feature-text">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#1f2937', margin: '0 0 1rem' }}>
            Automatic format detection.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Open a log from Nginx, Docker, Rails, or your own service. Logdesk recognises the format and starts reading straight away.
          </p>
        </div>
      </section>

      {/* Feature: Optimised for performance */}
      <section className="feature-section">
        <div className="feature-text">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#1f2937', margin: '0 0 1rem' }}>
            Lean and performant.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Built on Tauri and powered by a Rust parser, Logdesk stays lean and fast.
          </p>
        </div>
        <div className="feature-illustration" style={{ aspectRatio: '4/3' }}>
          <NoFileTooLargeIllustration />
        </div>
      </section>

      {/* Feature: Delightful to use */}
      <section className="feature-section reverse">
        <div className="feature-illustration">
          <div style={{ aspectRatio: '4/3' }}>
            <StaysLocalIllustration />
          </div>
        </div>
        <div className="feature-text">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#1f2937', margin: '0 0 1rem' }}>
            Stays on your machine.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
            Logdesk is entirely local. Your logs never leave your computer. What you read stays with you.
          </p>
        </div>
      </section>

      <footer style={{
        textAlign: 'center', padding: '1.5rem',
        borderTop: '1px solid #e5e7eb', fontSize: '0.8125rem', color: '#9ca3af'
      }}>
        <span>© {new Date().getFullYear()} Logdesk</span>
        <span style={{ margin: '0 0.5rem' }}>·</span>
        <Link href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
      </footer>
    </main>
  )
}
