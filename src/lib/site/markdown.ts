import matter from 'gray-matter'
import { unified } from 'unified'
import toMarkdownAST from 'remark-parse'
import toHtmlAST from 'remark-rehype'
import parseHtmlAndMarkdown from 'rehype-raw'
import toHtmlString from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins'
import * as config from './config'
import type { Frontmatter } from '$lib/types'

type ContentType = {
	content: string
	frontmatter: Frontmatter
}

function searchAndReplace(content: string, slug: string) {
	const embed = /{% embed src="(.*?)" title="(.*?)" %}/g
	const video = /{% video src="(.*?)" %}/g
	const image = /{% img src="(.*?)" alt="(.*?)" %}/g
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g

	return content
		.replace(embed, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src="${src}"
          loading="lazy"
        ></iframe>
      `.trim()
		})
		.replace(video, (_, src) => {
			return `
        <video controls>
          <source
            src="${config.imagesUrl}/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim()
		})
		.replace(image, (_, src, alt) => {
			return `
      <img
        src="${config.imagesUrl}/${slug}/images/${src}"
        alt="${alt}"
        loading="lazy"
      />
  `.trim()
		})
		.replace(youtube, (_, id, title) => {
			return `
				<lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
			`.trim()
		})
}

async function parseMarkdown(text: string, slug: string) {
	const processor = await unified()
		.use(toMarkdownAST)
		.use([
			remarkGfm,
			remarkSmartypants,
			[remarkTableofContents, { tight: true }],
		])
		.use(toHtmlAST, { allowDangerousHtml: true })
		.use([rehypeSlug, rehypeAutolinkHeadings])
		.use(rehypeCodeTitles)
		.use(rehypePrism)
		.use(parseHtmlAndMarkdown)
		.use(rehypeUnwrapImages)
		.use(rehypeCopyCode)
		.use(toHtmlString, { allowDangerousHtml: true })
		.process(searchAndReplace(text, slug))
	return processor.value
}

export async function markdownToHtml(text: string) {
	const { content, data } = matter(text)

	return {
		content: await parseMarkdown(content, data.slug),
		frontmatter: data as Frontmatter,
	}
}
