import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHTML } from './markdown'
import type { Fetch, Post } from '$lib/types'

export async function fetchJSON(url: string, fetchFn: Fetch = fetch) {
	const response = await fetchFn(url)
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`)
	return await response.json()
}

async function parseMarkdownFiles() {
	try {
		const posts: Post[] = []
		const postsPath = path.resolve('posts')
		const folders = await fs.readdir(postsPath)

		for (const folder of folders) {
			const markdownFilePath = path.join(postsPath, folder, `${folder}.md`)
			const markdownContent = await fs.readFile(markdownFilePath, 'utf-8')
			const { data } = matter(markdownContent)

			if (!data.draft) {
				posts.push(data as Post)
			}
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
		return markdownToHTML(markdownContent)
	} catch (e) {
		throw new Error(`Could not parse ${slug}.md`)
	}
}

export async function getPosts() {
	let posts = await parseMarkdownFiles()

	posts = posts.sort((firstItem, secondItem) => {
		return (
			new Date(secondItem.published).getTime() -
			new Date(firstItem.published).getTime()
		)
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
