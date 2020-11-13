import { ChakraProvider, Heading, Text, Code } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import type { AppProps } from 'next/app'

const components = {
  h1: Heading,
  h2: Heading,
  p: Text,
  code: Code,
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </ChakraProvider>
)

export default App
