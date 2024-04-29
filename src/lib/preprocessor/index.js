import matter from 'gray-matter'
import { unified } from 'unified'
import toMarkdownAST from 'remark-parse'
import toHtmlAST from 'remark-rehype'
// import parseHtmlAndMarkdown from 'rehype-raw'
import toHtmlString from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins.js'

const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`

/**
 * Returns post slug.
 * @param {string} filename
 */
function slugFromFilename(filename) {
	return filename.split('/').at(-1)?.replace('.md', '') ?? ''
}

/**
 * Search and replace Markdown.
 * @param {string} content
 * @param {string} slug
 */
function searchAndReplace(content, slug) {
	const frontmatter = /^---\n.*?\n---/s
	const embed = /{% embed src="(.*?)" title="(.*?)" %}/g
	const video = /{% video src="(.*?)" %}/g
	const image = /{% img src="(.*?)" alt="(.*?)" %}/g
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g

	return content
		.replace(frontmatter, '')
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
            src="${images}/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim()
		})
		.replace(image, (_, src, alt) => {
			return `
      <img
        src="${images}/${slug}/images/${src}"
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

/**
 * Markdown preprocessor.
 * @param {string} text
 * @param {string} slug
 */
async function parseMarkdown(text, slug) {
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
		// .use(parseHtmlAndMarkdown)
		.use(rehypeUnwrapImages)
		.use(rehypeCopyCode)
		.use(toHtmlString, { allowDangerousHtml: true })
		.process(searchAndReplace(text, slug))
	return processor.toString()
}

/**
 * Replace special Svelte characters.
 * @param {string} content
 */
function replaceSpecialSvelteChars(content) {
	return content.replaceAll('{', '&#123;').replaceAll('}', '&#125;')
}

/**
 * Exports post metadata.
 * @param {string} content
 */
function frontmatter(content) {
	const { data } = matter(content, { excerpt: false })
	const metadata = `export const metadata = ${JSON.stringify(data)}`
	return `<script context="module">${metadata}</script>`
}

/**
 * Preprocessor for Markdown files which converts
 * Markdown to HTML before it's compiled by Svelte
 * so we can use Svelte components inside Markdown.
 */
function sveltemark() {
	return {
		name: 'sveltemark',
		/**
		 * Convert Markdown to HTML.
		 * @param {Object} params
		 * @param {string} params.content
		 * @param {string} params.filename
		 */
		async markup({ content, filename }) {
			if (filename.endsWith('.md')) {
				const slug = slugFromFilename(filename)
				const html = await parseMarkdown(content, slug)
				const code = replaceSpecialSvelteChars(html)
				const metadata = frontmatter(content)
				return { code: `${metadata}\n${code}` }
			}
		},
	}
}

export default sveltemark
