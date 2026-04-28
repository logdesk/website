import { Head } from 'nextra/components'

export const metadata = {
  title: 'Logdesk',
  description: 'A local logs analyser for developers'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
