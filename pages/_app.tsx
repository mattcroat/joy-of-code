import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Accessibility } from '@/root/components/accessibility'
import { Navigation } from '@/root/components/shared/Layout/Navigation'
import { useAnalytics } from '@/root/hooks/useAnalytics'

import '@/root/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Accessibility />
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
