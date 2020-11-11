import { Flex, Heading } from '@chakra-ui/core'
import Head from 'next/head'

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Joy of Code</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex h="100vh" align="center" justify="center">
      <Heading as="h1" size="2xl">
        <span role="img" aria-label="artist palette">
          🎨
        </span>{' '}
        Joy of Code
      </Heading>
    </Flex>
  </>
)

export default Home
