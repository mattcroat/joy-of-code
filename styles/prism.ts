import { css } from '@emotion/react'
import chakraTheme from '@/root/styles/theme'

const prismBaseTheme = css`
  code {
    white-space: pre;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${chakraTheme.colors.gray[800]};
    background-color: none;
    font-family: ${chakraTheme.fonts.mono};
    font-weight: ${chakraTheme.fontWeights.normal};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${chakraTheme.lineHeights.tall};
    tab-size: 4;
    hyphens: none;
    width: 100%;
  }

  /* code blocks */
  pre[class*='language-'] {
    padding-top: ${chakraTheme.space[8]};
    padding-bottom: ${chakraTheme.space[4]};
    padding-left: ${chakraTheme.space[4]};
    padding-right: ${chakraTheme.space[4]};
    margin: ${chakraTheme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    white-space: nowrap;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${chakraTheme.colors.gray[50]};
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
    color: ${chakraTheme.colors.blue[100]};
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
    color: hsl(9, 100%, 64%);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${chakraTheme.colors.red[200]};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${chakraTheme.colors.red[200]};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${chakraTheme.colors.orange[200]};
  }

  .token.function,
  .token.class-name {
    color: ${chakraTheme.colors.blue[200]};
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: hsl(39, 100%, 47%);
  }

  .token.important,
  .token.bold {
    font-weight: ${chakraTheme.fontWeights.bold};
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .remark-code-title {
    position: relative;
    z-index: -1;
    max-width: max-content;
    top: 4px;
    font-family: ${chakraTheme.fonts.mono};
    font-weight: ${chakraTheme.fontWeights.bold};
    color: ${chakraTheme.colors.orange[900]};
    background-color: ${chakraTheme.colors.orange[200]};
    padding: ${chakraTheme.space[2]} ${chakraTheme.space[4]};
    border-radius: ${chakraTheme.radii.base};
    box-shadow: ${chakraTheme.shadows.lg};
  }

  .remark-code-title + pre {
    margin-top: 0;
  }
`

export const prismDarkTheme = css`
  ${prismBaseTheme};

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${chakraTheme.colors.gray[50]};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${chakraTheme.colors.gray[800]};
    box-shadow: ${chakraTheme.shadows.lg};
    border: 1px solid ${chakraTheme.colors.gray[900]};
    border-radius: ${chakraTheme.radii.base};
  }
`

export const prismLightTheme = css`
  ${prismBaseTheme};

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${chakraTheme.colors.gray[800]};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: ${chakraTheme.colors.gray[50]};
    box-shadow: ${chakraTheme.shadows.lg};
    border: 1px solid ${chakraTheme.colors.gray[100]};
    border-radius: ${chakraTheme.radii.base};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${chakraTheme.colors.orange[500]};
  }

  .token.punctuation {
    color: ${chakraTheme.colors.blue[400]};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${chakraTheme.colors.red[500]};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${chakraTheme.colors.red[500]};
  }

  .token.function,
  .token.class-name {
    color: ${chakraTheme.colors.blue[500]};
  }

  .remark-code-title {
    background-color: ${chakraTheme.colors.blue[100]};
    color: ${chakraTheme.colors.blue[900]};
  }
`
