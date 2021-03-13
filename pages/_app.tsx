import { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'

import { Navigation } from '@/root/components/shared/Layout/Navigation'
import {
  scrollbarColor,
  selectionBg,
  selectionText,
} from '@/root/styles/colors'
import { prismDarkTheme, prismLightTheme } from '@/root/styles/prism'
import chakraTheme from '@/root/styles/theme'
import { MDXComponents } from '@/root/components/ui/MDXComponents'

// hide Chakra UI outline borders around clickable components
import 'focus-visible/dist/focus-visible'

interface GlobalStyleProps {
  children: ReactNode
}

function GlobalStyle({ children }: GlobalStyleProps) {
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

          html {
            scrollbar-color: ${scrollbarColor[colorMode]} transparent;
            scrollbar-width: thin;
          }

          body {
            overflow-x: hidden;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background-color: none;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${scrollbarColor[colorMode]};
          }
        `}
      />
      {children}
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Navigation />
          <Component {...pageProps} />
        </GlobalStyle>
      </MDXProvider>
    </ChakraProvider>
  )
}
