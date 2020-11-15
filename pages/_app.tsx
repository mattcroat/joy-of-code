import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import type { AppProps } from 'next/app'

import MDXComponents from '@/components/MDXComponents'

import theme from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  </ChakraProvider>
)

export default App
