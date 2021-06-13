import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { chakraTheme } from '@/root/styles/chakraTheme'
import { GA_TRACKING_ID } from '@/root/lib/analytics'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter/Inter-Variable.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link href="/manifest.json" rel="manifest" />
          <link href="/icons/favicon.svg" rel="icon" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
          ></link>
          <meta content="#fbd38d" name="theme-color" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
              `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
