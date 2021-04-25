import { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

import { Navigation } from '@/root/components/shared/Layout/Navigation'
import {
  scrollbarColor,
  selectionBg,
  selectionText,
} from '@/root/styles/colors'
import { prismDarkTheme, prismLightTheme } from '@/root/styles/prism'
import chakraTheme from '@/root/styles/theme'

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

          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400 700 900;
            font-display: optional;
            src: url('./fonts/inter/Inter-Variable.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Mononoki';
            font-style: bold;
            font-weight: 700;
            font-display: swap;
            src: url('./fonts/mononoki/mononoki-Bold.woff2') format('woff2');
          }

          ::selection {
            background-color: ${selectionBg[colorMode]};
            color: ${selectionText[colorMode]};
          }

          html {
            height: 100%;
            cursor: url('./images/cursor-default.webp'), default;
            scrollbar-color: ${scrollbarColor[colorMode]} transparent;
            scrollbar-width: thin;
          }

          body {
            height: 100%;
            overflow-x: hidden;
          }

          a,
          button {
            cursor: url('./images/cursor-pointer.webp'), pointer !important;
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
    </ChakraProvider>
  )
}
