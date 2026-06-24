import Link from 'next/link'
import Image from 'next/image'

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
          Modern local log viewer.
        </h1>
        <p style={{
          fontSize: '1.125rem', color: '#6b7280', maxWidth: '480px',
          lineHeight: 1.7, margin: '0 0 2.5rem'
        }}>
          Filter and stream logs from files, Docker containers, and more — entirely on your machine.
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

      {/* Features Grid */}
      <div style={{ background: '#f3f4f6' }}>
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 2rem 5rem' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.1,
          color: '#1f2937', margin: '5rem 0 2.5rem', textAlign: 'center'
        }}>
          Built for the details
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-illustration">
              <Image
                src="/filter.png"
                alt="Filter logs by level, keyword, or time range"
                width={1468}
                height={978}
                style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
              />
            </div>
            <div className="feature-card-text">
              <h3>Find the signal.</h3>
              <p>Filter by log level, keyword, or time range. Get straight to the line that matters — without scrolling through thousands of others. <Link href="/docs/query-language" style={{ color: '#0d9488', textDecoration: 'none' }}>Query language docs →</Link></p>
            </div>
          </div>
          <div className="feature-card">
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden', padding: '1.5rem 1.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignContent: 'flex-start', justifyContent: 'flex-start', width: '100%' }}>
                {Array.from({ length: 3 }).flatMap((_, i) => [
                  { name: 'Nginx', color: '#009900', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 0L1.605 6v12L12 24l10.395-6V6zm-1.04 16.971l-3.136-4.72v4.72H5.18V7.029H8.12l3.136 4.72V7.03h2.644v9.942zm5.08 0h-2.643V7.029h2.644v9.942z"/></svg>
                  )},
                  { name: 'Docker', color: '#2496ED', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
                  )},
                  { name: 'Rails', color: '#CC0000', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M9.293 0l-1.6 9.6H0l.72-1.12c1.12-.16 2.08-.64 2.4-1.76L4.96 0H9.293zm5.387 0c.763 1.387.97 2.963.64 4.48-.64 3.04-3.04 4.48-5.92 5.12L10.56 0h4.12zM5.76 10.88H0l-.001.64c0 6.4 4.96 11.84 11.36 12.32l.8-4.96c-3.36-.64-5.92-3.68-6.4-8zm13.12-.48c-.8 4.32-4.16 7.36-8.16 8l-.8 5.6C15.683 23.04 20 17.92 20 11.84c0-.48-.001-.96-.08-1.44h-1.04z"/></svg>
                  )},
                  { name: 'Node.js', color: '#339933', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.073a.272.272 0 0 0-.271 0L3.075 6.68c-.085.05-.139.146-.139.241v10.15c0 .097.054.19.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.851 1.851 0 0 1 1.354 17.1V6.921c0-.66.351-1.276.922-1.608L11.07.236a1.855 1.855 0 0 1 1.852 0l8.795 5.077c.573.332.922.948.922 1.608v10.15c0 .659-.349 1.273-.922 1.608l-8.795 5.077A1.847 1.847 0 0 1 11.998 24"/></svg>
                  )},
                  { name: 'Python', color: '#3776AB', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.869s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.131V3.13S18.271 0 11.914 0zm-3.2 1.812a1.07 1.07 0 0 1 1.07 1.069 1.07 1.07 0 0 1-1.07 1.069A1.07 1.07 0 0 1 7.645 2.88a1.07 1.07 0 0 1 1.069-1.068zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H11.98v-.826H20.1s3.9.445 3.9-5.735c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.869s.109 3.402-3.35 3.402H9.451s-3.24-.052-3.24 3.131V20.87S5.729 24 12.086 24zm3.2-1.813a1.07 1.07 0 0 1-1.07-1.068 1.07 1.07 0 0 1 1.07-1.07 1.07 1.07 0 0 1 1.068 1.07 1.07 1.07 0 0 1-1.068 1.068z"/></svg>
                  )},
                  { name: 'Custom', color: '#6b7280', icon: (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                  )},
                ].map(({ name, color, icon }) => (
                  <span key={`${i}-${name}`} className="format-logo-pill" style={{ borderColor: color, color, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    {icon}{name}
                  </span>
                )))}
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3rem', background: 'linear-gradient(to bottom, transparent, #f9fafb)' }} />
            </div>
            <div className="feature-card-text">
              <h3>Automatic format detection.</h3>
              <p>Understands popular log formats automatically. <Link href="/docs/supported-formats" style={{ color: '#0d9488', textDecoration: 'none' }}>See supported formats →</Link></p>
            </div>
          </div>
          <div className="feature-card" style={{ gridColumn: 'span 1' }}>
            <div className="feature-card-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
              </svg>
            </div>
            <div className="feature-card-text">
              <h3>Lean and performant.</h3>
              <p>Built on Tauri and powered by a Rust parser, Logdesk stays lean and fast.</p>
            </div>
          </div>
          <div className="feature-card" style={{ gridColumn: 'span 2', alignSelf: 'start' }}>
            <div className="feature-card-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', padding: '2rem' }}>
              <Image
                src="/multi-tool.svg"
                alt="Multiple log sources"
                width={1000}
                height={1000}
                style={{ width: '5rem', height: '5rem' }}
              />
            </div>
            <div className="feature-card-text">
              <h3>Logs from anywhere.</h3>
              <p style={{ lineHeight: 2 }}>
                Open a <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle', color: '#16a34a', fontWeight: 600 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>file</span>, attach to a <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle', color: '#2496ED', fontWeight: 600 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>Docker container</span>, <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle', color: '#7c3aed', fontWeight: 600 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>pipe</span> output from the terminal, or run a <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle', color: '#d97706', fontWeight: 600 }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>command</span> directly — Logdesk handles every source the same way.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <Image
                src="/vault.svg"
                alt="Stays on your machine"
                width={1000}
                height={1000}
                style={{ width: '11rem', height: '11rem', borderRadius: '0.75rem' }}
              />
            </div>
            <div className="feature-card-text">
              <h3>Stays on your machine.</h3>
              <p>Logdesk is entirely local. Your logs never leave your computer. What you read stays with you.</p>
            </div>
          </div>
          <div className="feature-card" style={{ gridColumn: 'span 2' }}>
            <div className="feature-card-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/details.svg"
                alt="Designed with care"
                width={1000}
                height={1000}
                style={{ width: '8rem', height: '8rem' }}
              />
            </div>
            <div className="feature-card-text">
              <h3>Designed with care.</h3>
              <p>Every element is designed with intention to make your experience delightful. Viewing logs should be fun too.</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Agent ready */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '6rem 2rem 5rem', textAlign: 'center' }}>
        <Image
          src="/agent.svg"
          alt="AI agent integration"
          width={1000}
          height={1000}
          style={{ width: '100%', maxWidth: '120px', height: 'auto', margin: '0 auto 2.5rem', display: 'block' }}
        />
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1.1,
          color: '#1f2937', margin: '0 0 1.25rem'
        }}>
          Let your agents in.
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.7, margin: '0 auto 2.5rem', maxWidth: '480px' }}>
          Let your AI agents access the logs. Tail live output, run queries, or pull histograms.
        </p>
        <pre style={{
          display: 'inline-block', textAlign: 'left',
          background: '#f3f4f6', borderRadius: '0.75rem',
          padding: '1.5rem 2rem', fontFamily: 'ui-monospace, monospace',
          fontSize: '0.9375rem', color: '#1f2937', lineHeight: 2,
          overflowX: 'auto', margin: '0 0 2.5rem'
        }}>
          <code>{`$ logdesk tail my-app\n$ logdesk query 'level=error'\n$ logdesk histogram --field level`}</code>
        </pre>
        <div>
          <Link href="/docs/cli" style={{
            display: 'inline-block', fontSize: '0.9375rem', fontWeight: 600,
            color: '#1f2937', textDecoration: 'none',
            padding: '0.625rem 1.5rem', borderRadius: '0.5rem',
            border: '1px solid #d1d5db', background: '#fff'
          }}>
            Read the CLI docs →
          </Link>
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
