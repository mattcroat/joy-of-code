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
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins'

import { imagesUrl } from './config'
import type { FrontMatterType } from '$lib/types'

type ContentType = {
	content: string
	frontmatter: FrontMatterType
}

function searchAndReplace(content: string, slug: string): string {
	const embeds = /{% embed src="(.*?)" title="(.*?)" %}/g
	const videos = /{% video src="(.*?)" %}/g
	const images = /{% img src="(.*?)" alt="(.*?)" %}/g

	return content
		.replace(embeds, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src="${src}"
          loading="lazy"
        ></iframe>
      `.trim()
		})
		.replace(videos, (_, src) => {
			return `
        <video controls>
          <source
            src="${imagesUrl}/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim()
		})
		.replace(images, (_, src, alt) => {
			return `
      <img
        src="${imagesUrl}/${slug}/images/${src}"
        alt="${alt}"
        loading="lazy"
      />
  `.trim()
		})
}

export async function markdownToHTML(markdown: string): Promise<ContentType> {
	const { content, data } = matter(markdown)

	// I could use `compile` from mdsvex to get
	// Svelte components working inside Markdown
	const result = await unified()
		.use(fromMarkdown)
		.use([
			// GitHub flavored Markdown
			remarkGfm,

			// Unique identifier for headings
			remarkHeadings,

			// Links for headings
			remarkSlug,

			// Typographic punctuation like real quotes
			remarkSmartypants,

			// Generates table of contents from headings
			// `tight` removes <p> from <li> when nested
			[remarkTableofContents, { tight: true }],
		])
		// To be able to parse a mix of Markdown and HTML
		// `remark-rehype` is required with `rehype-raw`
		// https://github.com/rehypejs/rehype-raw
		.use(fromMarkdownToHtml, { allowDangerousHtml: true })

		// Adds code titles above code blocks
		.use(rehypeCodeTitles)

		// Adds syntax highlight, line numbers and higlight
		.use(rehypePrism)

		// For further processing turn content into a regular syntax tree
		.use(parseHtmlAndMarkdown)

		// Remove paragraph around images
		.use(rehypeUnwrapImages)

		// Copy code to clipboard
		.use(rehypeCopyCode)

		.use(toHtml)
		.process(searchAndReplace(content, data.slug))
	const processedMarkdown = result.value

	return {
		content: processedMarkdown as string,
		frontmatter: data as FrontMatterType,
	}
}
