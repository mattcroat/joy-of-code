import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import type { AppProps } from 'next/app'

import MDXComponents from '@/components/MDXComponents'

import theme from '@/styles/theme'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <MDXProvider components={MDXComponents}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  </ChakraProvider>
)

export default App
