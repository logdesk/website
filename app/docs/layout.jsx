import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
import './docs.css'

const navbar = (
  <Navbar logo={
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Image src="/logo.png" alt="Logdesk" width={28} height={28} />
      <span style={{ fontWeight: 600 }}>Logdesk</span>
    </span>
  } />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Logdesk.</Footer>

export default async function DocsLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap('/docs')}
      docsRepositoryBase="https://github.com/raathi/logdesk"
      footer={footer}
      nextThemes={{ defaultTheme: 'light', forcedTheme: 'light' }}
      darkMode={false}
    >
      {children}
    </Layout>
  )
}
