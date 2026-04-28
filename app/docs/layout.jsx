import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const navbar = <Navbar logo={<b>Logdesk</b>} />
const footer = <Footer>MIT {new Date().getFullYear()} © Logdesk.</Footer>

export default async function DocsLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/raathi/logdesk"
      footer={footer}
    >
      {children}
    </Layout>
  )
}
