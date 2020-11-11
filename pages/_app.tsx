import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  Heading,
  Text,
  Code,
} from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'

import type { AppProps } from 'next/app'

const components = {
  h1: Heading,
  h2: Heading,
  p: Text,
  code: Code,
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <MDXProvider components={components}>
        <CSSReset />
        <Component {...pageProps} />
      </MDXProvider>
    </ColorModeProvider>
  </ThemeProvider>
)

export default App
