import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { markdownToHtml } from './markdown'
import type { Post } from '$lib/types'

async function parseMarkdownFiles() {
	try {
		const posts: Post[] = []
		const postsPath = path.resolve('posts')
		const folders = await fs.readdir(postsPath)

		for (const folder of folders) {
			const markdownFilePath = path.join(postsPath, folder, `${folder}.md`)
			const markdownContent = await fs.readFile(markdownFilePath, 'utf-8')
			const { data } = matter(markdownContent)
			posts.push(data as Post)
		}

		return posts
	} catch (e) {
		throw new Error('Could not parse Markdown files')
	}
}

async function parseMarkdownFile(slug: string) {
	try {
		const postPath = path.resolve(`posts/${slug}/${slug}.md`)
		const markdownContent = await fs.readFile(postPath, 'utf-8')
		return markdownToHtml(markdownContent)
	} catch (e) {
		throw new Error(`Could not parse ${slug}.md`)
	}
}

function getTime(date: string) {
	return new Date(date).getTime()
}

export async function getPosts() {
	let posts = await parseMarkdownFiles()
	posts = posts.sort((first, second) => {
		return getTime(second.published) - getTime(first.published)
	})
	return posts
}

export async function getPostsByCategory(category: string) {
	const posts = await getPosts()
	return posts.filter((post) => !post.draft && post.category === category)
}

export async function getPost(slug: string) {
	return parseMarkdownFile(slug)
}
