import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '@/components/MDXComponents'

import { prismDarkTheme, prismLightTheme } from '@/styles/prism'
import theme from '@/styles/theme'

interface GlobalStyleProps {
  children: ReactNode
}

const GlobalStyle = ({ children }: GlobalStyleProps) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'dark' ? prismDarkTheme : prismLightTheme};
        `}
      />
      {children}
    </>
  )
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <MDXProvider components={MDXComponents}>
      <GlobalStyle>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </MDXProvider>
  </ChakraProvider>
)

export default App
