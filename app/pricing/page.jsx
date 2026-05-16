import Link from 'next/link'
import Image from 'next/image'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
      <path d="M3 8l3.5 3.5L13 4.5" stroke="#111827" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Logdesk" width={32} height={32} />
          <span style={{ fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em', color: '#111827' }}>Logdesk</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/pricing" className="nav-link" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>
            Pricing
          </Link>
          <Link href="/docs" className="nav-link" style={{ fontSize: '0.875rem', color: '#6b7280', textDecoration: 'none' }}>
            Docs
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '5rem 2rem 3rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.1,
          color: '#111827', margin: '0 0 1rem'
        }}>
          Simple pricing.
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', margin: 0 }}>
          Free to get started. Upgrade when you need more.
        </p>
      </section>

      {/* Cards */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
        maxWidth: '680px', margin: '0 auto', padding: '0 2rem 6rem'
      }}>
        {/* Free */}
        <div style={{
          border: '1px solid #e5e7eb', borderRadius: '1rem',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
        }}>
          <div>
            <div style={{ marginBottom: '0.875rem' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#f3f4f6" />
                <path d="M14 20.5s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 21 11.5c0 4.5-7 9-7 9z" fill="#6b7280" />
              </svg>
            </div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#6b7280', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Free</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#111827' }}>$0</div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.25rem' }}>forever</div>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Open and stream local log files',
              'Filter by level, keyword, and time',
              'Stack format auto-detection',
              'Unlimited file size',
            ].map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: '#374151' }}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <a href="https://pub-3d98399b0e8b4d5bb8a736a4afd4ba05.r2.dev/latest/logdesk_aarch64.dmg" download className="btn-secondary" style={{
            display: 'block', textAlign: 'center', marginTop: 'auto',
            padding: '0.625rem 1.25rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none',
            color: '#374151', background: '#fff', border: '1px solid #d1d5db'
          }}>
            Download
          </a>
        </div>

        {/* Pro */}
        <div style={{
          border: '1.5px solid #111827', borderRadius: '1rem',
          padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          background: '#111827', boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
        }}>
          <div>
            <div style={{ marginBottom: '0.875rem' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#374151" />
                <path d="M14 6l2.2 5.4 5.8.5-4.4 3.8 1.4 5.6L14 18.4l-5 2.9 1.4-5.6-4.4-3.8 5.8-.5L14 6z" fill="#fff" />
              </svg>
            </div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pro</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff' }}>$35<span style={{ fontSize: '1rem', fontWeight: 500, color: '#9ca3af' }}>/year</span></div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>Keep it forever · 1 year of updates</div>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Everything in Free',
              'Session persistence',
            ].map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: '#e5e7eb' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="#e5e7eb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div style={{
            display: 'block', textAlign: 'center', marginTop: 'auto',
            padding: '0.625rem 1.25rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem',
            color: '#6b7280', background: '#1f2937'
          }}>
            Coming soon
          </div>
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
