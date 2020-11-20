import { theme } from '@chakra-ui/react'
import { css } from '@emotion/react'

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
    color: hsl(210, 12.6%, 50.2%);
  }

  .token.punctuation {
    color: hsl(0, 0%, 60%);
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
    color: hsl(80, 100%, 30%);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: hsl(33, 45%, 42%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(198, 100%, 33%);
  }

  .token.function,
  .token.class-name {
    color: hsl(348, 68%, 58%);
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

  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }

  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[200]};
    border-top-left-radius: ${theme.radii.lg};
    border-top-right-radius: ${theme.radii.lg};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;

    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`

export const prismDarkTheme = css`
  ${prismBaseTheme};

  :not(pre) > code[class*='language-'] {
    background-color: hsl(207, 95%, 8%);
  }

  .token.attr-name {
    color: hsl(84, 62%, 63%);
    font-style: italic;
  }

  .token.comment {
    color: hsl(180, 8%, 54%);
  }

  .token.string,
  .token.url {
    color: hsl(84, 62%, 63%);
  }

  .token.variable {
    color: hsl(217, 34%, 88%);
  }

  .token.number {
    color: hsl(14, 90%, 70%);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: hsl(221, 100%, 75%);
  }

  .token.punctuation {
    color: hsl(276, 68%, 75%);
  }

  .token.selector,
  .token.doctype {
    color: hsl(276, 68%, 75%);
    font-style: 'italic';
  }

  .token.class-name {
    color: hsl(33, 100%, 77%);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: hsl(340, 100%, 83%);
  }

  .token.boolean {
    color: hsl(340, 100%, 83%);
  }

  .token.property {
    color: hsl(174, 42%, 65%);
  }

  .token.namespace {
    color: hsl(197, 31%, 77%);
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[50]};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${theme.colors.gray[900]};
  }

  .mdx-marker {
    background-color: ${theme.colors.gray[700]};
  }

  .remark-code-title {
    background-color: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
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
  }

  .mdx-marker {
    background-color: hsla(204, 45%, 96%, 1);
  }
`
