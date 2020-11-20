import { css } from '@emotion/react'

import theme from '@/styles/theme'

const prismBaseTheme = css`
  code {
    white-space: pre;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
    background-color: none;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights.tall};
    tab-size: 4;
    hyphens: none;
    width: 100%;
  }

  /* code blocks */
  pre[class*='language-'] {
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${theme.colors.gray[50]};
  }

  /* inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(180, 8%, 54%);
  }

  .token.punctuation {
    color: ${theme.colors.blue[100]};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: hsl(326.7, 100%, 30%);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${theme.colors.red[200]};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${theme.colors.red[200]};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${theme.colors.orange[200]};
  }

  .token.function,
  .token.class-name {
    color: ${theme.colors.blue[200]};
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: hsl(39, 100%, 47%);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export const prismDarkTheme = css`
  ${prismBaseTheme};

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[50]};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${theme.colors.gray[800]};
    box-shadow: ${theme.shadows.lg};
    border: 1px solid ${theme.colors.gray[900]};
    border-radius: 4px;
  }
`

export const prismLightTheme = css`
  ${prismBaseTheme};

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${theme.colors.gray[50]};
    box-shadow: ${theme.shadows.lg};
    border: 1px solid ${theme.colors.gray[100]};
    border-radius: 4px;
  }
`
