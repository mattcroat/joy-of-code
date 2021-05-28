import { css, Global } from '@emotion/react'
import type { ReactNode } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { chakraTheme } from '@/root/styles/chakraTheme'

interface GlobalStyleProps {
  children: ReactNode
}

export function GlobalStyle({ children }: GlobalStyleProps) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400 700 900;
            font-display: swap;
            src: url('./fonts/inter/Inter-Variable.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Mononoki';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('./fonts/mononoki/mononoki-Regular.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Mononoki';
            font-style: bold;
            font-weight: 700;
            font-display: swap;
            src: url('./fonts/mononoki/mononoki-Bold.woff2') format('woff2');
          }

          ::selection {
            background-color: ${useColorModeValue('#bee3f8', '#fbd38d')};
            color: ${useColorModeValue('#1A365d', '#652b19')};
          }

          html {
            height: 100%;
            cursor: url('./images/cursor-default.webp'), default;
            scrollbar-color: ${useColorModeValue('#2b6cb0', '#fbd38d')}
              transparent;
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
            background-color: ${useColorModeValue('#2b6cb0', '#fbd38d')};
          }

          code {
            background-color: ${useColorModeValue(
              chakraTheme.colors.gray[600],
              chakraTheme.colors.gray[700]
            )};
            color: ${chakraTheme.colors.gray[100]};
            font-family: ${chakraTheme.fonts.Mononoki};
            padding: ${chakraTheme.space[1]};
          }

          code[class*='language-'],
          pre[class*='language-'] {
            background-color: transparent;
            color: ${useColorModeValue(
              chakraTheme.colors.gray[800],
              chakraTheme.colors.gray[100]
            )};
            padding: 0;
            line-height: ${chakraTheme.lineHeights.tall};
          }

          .remark-code-title {
            max-width: max-content;
            position: relative;
            top: 4px;
            background-color: ${useColorModeValue(
              chakraTheme.colors.blue[100],
              chakraTheme.colors.orange[200]
            )};
            color: ${useColorModeValue(
              chakraTheme.colors.blue[900],
              chakraTheme.colors.orange[900]
            )};
            font-family: ${chakraTheme.fonts.Mononoki};
            font-weight: ${chakraTheme.fontWeights.bold};
            padding: ${chakraTheme.space[2]} ${chakraTheme.space[4]};
            border-radius: ${chakraTheme.radii.base};
            box-shadow: ${chakraTheme.shadows.lg};
            z-index: -1;
          }

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: ${chakraTheme.colors.gray[400]};
          }

          .token.punctuation {
            color: ${useColorModeValue(
              chakraTheme.colors.blue[400],
              chakraTheme.colors.blue[100]
            )};
          }

          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: ${chakraTheme.colors.red[400]};
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: ${useColorModeValue(
              chakraTheme.colors.red[500],
              chakraTheme.colors.red[200]
            )};
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: ${useColorModeValue(
              chakraTheme.colors.red[500],
              chakraTheme.colors.red[200]
            )};
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: ${useColorModeValue(
              chakraTheme.colors.orange[500],
              chakraTheme.colors.orange[200]
            )};
          }

          .token.function,
          .token.class-name {
            color: ${useColorModeValue(
              chakraTheme.colors.blue[500],
              chakraTheme.colors.blue[200]
            )};
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: ${chakraTheme.colors.orange[300]};
          }
        `}
      />
      {children}
    </>
  )
}
