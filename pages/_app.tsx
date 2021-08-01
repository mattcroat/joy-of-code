import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Accessibility } from '@/root/components/accessibility'
import { Navigation } from '@/root/components/shared/Layout/Navigation'
import { PreferencesProvider } from '@/root/context/PreferencesProvider'
import { useAnalytics } from '@/root/hooks/useAnalytics'

import '@/root/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <PreferencesProvider>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Accessibility />
      <Navigation />
      <Component {...pageProps} />
    </PreferencesProvider>
  )
}
