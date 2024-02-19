import { json } from '@sveltejs/kit'
import matter from 'gray-matter'

const patterns: Record<string, RegExp> = {
	frontmatter: /---.*?---/gs,
	code: /```.*?\n|```/gs,
	inline: /`([^`]*)`/g,
	heading: /^#{1,6}\s.*$/gm,
	link: /\[([^\]]+)\]\(([^)]+)\)/g,
	image: /\!\[.*?\]\(.*?\)/g,
	blockquote: /> /gm,
	bold: /\*\*/g,
	italic: /\b_([^_]+)_(?!\w)/g,
	special: /{%.*?%}/g,
	tags: /[<>]/g,
}

const htmlEntities: Record<string, string> = {
	'<': '&lt;',
	'>': '&gt;',
}

function stripMarkdown(markdown: string) {
	for (const pattern in patterns) {
		if (pattern === 'inline') {
			markdown = markdown.replace(patterns[pattern], '$1')
		} else if (pattern === 'tags') {
			markdown = markdown.replace(
				patterns[pattern],
				(match) => htmlEntities[match]
			)
		} else if (pattern === 'link') {
			markdown = markdown.replace(patterns[pattern], '$2')
		} else if (pattern === 'italic') {
			markdown = markdown.replace(patterns[pattern], '$1')
		} else {
			markdown = markdown.replace(patterns[pattern], '')
		}
	}

	return markdown
}

export async function GET() {
	const paths = import.meta.glob('/posts/**/*.md', { as: 'raw', eager: true })
	const posts = Object.entries(paths)
		.map(([_, content]) => {
			const frontmatter = matter(content)

			if (frontmatter.data.draft) {
				return null
			}

			return {
				title: frontmatter.data.title,
				slug: frontmatter.data.slug,
				content: stripMarkdown(content),
			}
		})
		.filter(Boolean)

	return json(posts)
}

export const prerender = true
