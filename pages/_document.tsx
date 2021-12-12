import Document, { Head, Html, Main, NextScript } from 'next/document'

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
          <link href="/icons/manifest.json" rel="manifest" />
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
          <meta content="#191e29" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
