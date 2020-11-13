import Head from 'next/head'

import Navigation from '@/components/Navigation'

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Joy of Code</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
  </>
)

export default Home
