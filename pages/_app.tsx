import { ThemeProvider, CSSReset, Heading, Text, Code } from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: Heading,
  h2: Heading,
  p: Text,
  code: Code,
}

const App = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  )
}

export default App
