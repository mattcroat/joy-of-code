import { unified } from 'unified'
import fromMarkdown from 'remark-parse'
import fromMarkdownToHtml from 'remark-rehype'
import parseHtmlAndMarkdown from 'rehype-raw'
import toHtml from 'rehype-stringify'
import matter from 'gray-matter'

import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

export async function markdownToHTML(markdown) {
  try {
    const { content } = matter(markdown)

    const result = await unified()
      .use(fromMarkdown)
      .use([
        remarkGfm,
        remarkHeadings,
        remarkSlug,
        remarkSmartypants,
        [remarkTableofContents, { tight: true }],
      ])
      .use(fromMarkdownToHtml, { allowDangerousHtml: true })
      .use(rehypeCodeTitles)
      .use(rehypePrism)
      .use(parseHtmlAndMarkdown)
      .use(toHtml)
      .process(content)
    const processedMarkdown = result.value
    return processedMarkdown
  } catch (error) {
    if (error instanceof Error) {
      console.error(`💩 Error parsing Markdown: ${error.message}`)
    }
  }
}
