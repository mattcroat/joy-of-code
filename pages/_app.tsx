import { AppProps } from 'next/app'
import Head from 'next/head'

import { Navigation } from '@/root/components/shared/layout/navigation'
import { Options } from '@/root/components/a11y'

import '@/root/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Options />
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
