import Head from 'next/head'

import Navbar from '@/components/Navbar'

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Joy of Code</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
  </>
)

export default Home
