import { FC, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'

import { MDXComponents } from '@/components/ui'

import { prismDarkTheme, prismLightTheme } from '@/styles/prism'
import chakraTheme from '@/styles/theme'

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
          ::selection {
            background-color: ${selectionBg[colorMode]};
            color: ${selectionText[colorMode]};
          }
        `}
      />
      {children}
    </>
  )
}

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={chakraTheme}>
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
