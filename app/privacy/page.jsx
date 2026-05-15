import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Logdesk',
  description: 'Privacy policy for Logdesk and logdesk.app'
}

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{
      fontSize: '1.125rem', fontWeight: 700, color: '#111827',
      letterSpacing: '-0.02em', margin: '0 0 0.75rem'
    }}>
      {title}
    </h2>
    <div style={{ fontSize: '0.9375rem', color: '#4b5563', lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
)

export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb'
      }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit' }}>
          logdesk
        </Link>
        <Link href="/docs" style={{
          fontSize: '0.875rem', color: '#374151', textDecoration: 'none',
          padding: '0.375rem 0.875rem', border: '1px solid #d1d5db',
          borderRadius: '0.375rem'
        }}>
          Docs
        </Link>
      </nav>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <p style={{ fontSize: '0.8125rem', color: '#9ca3af', margin: '0 0 1rem' }}>Last updated: 15 May 2026</p>
        <h1 style={{
          fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.04em',
          color: '#111827', margin: '0 0 0.5rem'
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.8, margin: '0 0 3rem' }}>
          This policy describes how Logdesk (<strong>logdesk.app</strong>) handles information when you visit this website or use the Logdesk macOS app. Logdesk is operated by an individual developer based in Sydney, Australia.
        </p>

        <Section title="1. Website analytics">
          <p style={{ margin: '0 0 0.75rem' }}>
            This website uses <strong>Google Analytics</strong> to understand how visitors interact with logdesk.app. Google Analytics collects information such as:
          </p>
          <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.5rem' }}>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or search engine</li>
            <li>Browser type, operating system, and approximate location (country/city level, derived from IP address)</li>
          </ul>
          <p style={{ margin: '0 0 0.75rem' }}>
            This data is collected via cookies and sent to Google. It is used only to understand how the site is being used and to improve it. No personal information such as your name or email is collected through analytics.
          </p>
          <p style={{ margin: 0 }}>
            Google's data practices are governed by the{' '}
            <a href="https://policies.google.com/privacy" style={{ color: '#111827' }} target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>. You can opt out of Google Analytics across all websites using the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#111827' }} target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </Section>

        <Section title="2. Cookies">
          <p style={{ margin: 0 }}>
            This website uses cookies set by Google Analytics to distinguish unique visitors and track sessions. These cookies do not identify you personally. You can disable cookies in your browser settings at any time, though this may affect site functionality.
          </p>
        </Section>

        <Section title="3. The Logdesk desktop app">
          <p style={{ margin: '0 0 0.75rem' }}>
            The Logdesk macOS app reads log files stored locally on your device. <strong>It does not collect, transmit, or store any of your log file contents.</strong> All processing happens entirely on your machine.
          </p>
          <p style={{ margin: 0 }}>
            If you have purchased a license, the app contacts a license verification server to validate your license key. This request includes your license key and a machine identifier used solely to enforce per-seat limits. No log data, file paths, or usage information is included in this request.
          </p>
        </Section>

        <Section title="4. Information you provide">
          <p style={{ margin: 0 }}>
            If you contact us by email, we will use your email address to respond to your message. We do not add you to any mailing list or share your contact details with third parties.
          </p>
        </Section>

        <Section title="5. Data sharing">
          <p style={{ margin: 0 }}>
            We do not sell, rent, or share your personal information with third parties, except as required by law or as described in this policy (i.e. analytics data processed by Google as described above).
          </p>
        </Section>

        <Section title="6. Data retention">
          <p style={{ margin: 0 }}>
            Google Analytics data is retained for 14 months per Google's default retention settings. License verification requests are logged by the license server for fraud prevention and are retained for up to 12 months.
          </p>
        </Section>

        <Section title="7. Your rights (Australian Privacy Act)">
          <p style={{ margin: '0 0 0.75rem' }}>
            Under the Australian Privacy Act 1988, you have the right to request access to any personal information we hold about you, and to request corrections if it is inaccurate.
          </p>
          <p style={{ margin: 0 }}>
            To make such a request, contact us at{' '}
            <a href="mailto:privacy@logdesk.app" style={{ color: '#111827' }}>privacy@logdesk.app</a>. We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. Changes to this policy">
          <p style={{ margin: 0 }}>
            We may update this policy from time to time. The date at the top of the page reflects when it was last revised. Continued use of the website or app after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="9. Contact">
          <p style={{ margin: 0 }}>
            Questions or concerns about this policy? Email{' '}
            <a href="mailto:privacy@logdesk.app" style={{ color: '#111827' }}>privacy@logdesk.app</a>.
          </p>
        </Section>
      </div>

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
