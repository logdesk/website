import Link from 'next/link'

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
          macOS · Free & Open Source
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
          Logdesk is a native macOS app for streaming, filtering, and inspecting
          log files — built for developers who live in the terminal.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#download" style={{
            display: 'inline-block', background: '#111827', color: '#fff',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none'
          }}>
            Download for macOS
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

      {/* Features */}
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem', maxWidth: '900px', margin: '0 auto', padding: '2rem 2rem 6rem'
      }}>
        {[
          { icon: '⚡', title: 'Real-time streaming', desc: 'Tail any log file and see new lines appear instantly as they are written.' },
          { icon: '🔍', title: 'Filter & search', desc: 'Quickly narrow down entries by log level, keyword, or time range.' },
          { icon: '📊', title: 'Histogram view', desc: 'Spot spikes and patterns at a glance with a built-in log frequency histogram.' },
          { icon: '🖥', title: 'Native macOS', desc: 'Built with Tauri — a lightweight, fast native shell with a React frontend.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{
            padding: '1.5rem', border: '1px solid #e5e7eb',
            borderRadius: '0.75rem', background: '#fafafa'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{icon}</div>
            <h3 style={{ margin: '0 0 0.5rem', fontWeight: 700, fontSize: '1rem', color: '#111827' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
          </div>
        ))}
      </section>

      <footer style={{
        textAlign: 'center', padding: '1.5rem',
        borderTop: '1px solid #e5e7eb', fontSize: '0.8125rem', color: '#9ca3af'
      }}>
        MIT {new Date().getFullYear()} © Logdesk
      </footer>
    </main>
  )
}
