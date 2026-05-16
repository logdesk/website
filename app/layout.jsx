import { Head } from 'nextra/components'
import Script from 'next/script'
import './global.css'

export const metadata = {
  title: 'Logdesk',
  description: 'A local logs analyser for developers'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body style={{ margin: 0 }}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2XBNJQWPW4" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2XBNJQWPW4');
        `}</Script>
        {children}
      </body>
    </html>
  )
}
