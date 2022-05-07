import { unified } from 'unified'
import fromMarkdown from 'remark-parse'
import fromMarkdownToHtml from 'remark-rehype'
import parseHtmlAndMarkdown from 'rehype-raw'
import toHtml from 'rehype-stringify'
import matter from 'gray-matter'

// plugins
import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

import type { FrontMatterType } from '$root/types'

type ContentType = {
  content: string
  frontmatter: FrontMatterType
}

export async function markdownToHTML(markdown: string): Promise<ContentType> {
  const { content, data } = matter(markdown)

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

  return {
    content: processedMarkdown as string,
    frontmatter: data as FrontMatterType,
  }
}

export async function frontMatter(markdown: string): Promise<FrontMatterType> {
  const { data: frontMatter } = matter(markdown)
  return frontMatter as FrontMatterType
}
