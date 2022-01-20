import * as gtag from '@/root/lib/analytics/gtag'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { Navigation } from '@/root/components/shared/layout/navigation'
import { Options } from '@/root/components/a11y'

import '@/root/styles/tailwind.css'
import { useAnalytics } from '@/root/hooks/useAnalytics'

function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        id="gtag-init"
        strategy="afterInteractive"
      />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Options />
      <Navigation />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
