import matter from 'gray-matter'

import { markdownToHTML } from './markdown'
import type { Fetch, Post } from '$lib/types'

export async function fetchJSON(url: string, fetchFn: Fetch = fetch) {
	const response = await fetchFn(url)

	if (!response.ok) {
		throw new Error(`Error fetching JSON from ${response.url}`)
	}

	return await response.json()
}

export async function getPosts({
	limit,
	category,
}: {
	limit?: number
	category?: string
}) {
	let posts: Post[] = []

	const paths = import.meta.glob('/posts/*/*.md', {
		as: 'raw',
		eager: true,
	})

	for (const path in paths) {
		const { data } = matter(paths[path])
		posts.push(data as Post)
	}

	// for (const path in paths) {
	// 	const markdown = await paths[path]()
	// 	const { data } = matter(markdown)
	// 	posts.push(data as Post)
	// }

	posts = posts.sort((firstItem, secondItem) => {
		return (
			new Date(secondItem.published).getTime() -
			new Date(firstItem.published).getTime()
		)
	})

	if (limit > 0 && !category) {
		posts = posts.slice(0, limit)
		return posts
	}

	if (category && limit > 0) {
		posts = posts
			.filter((post) => !post.draft && post.category === category)
			.slice(0, limit)

		return posts
	}

	if (category && !limit) {
		posts = posts.filter((post) => !post.draft && post.category === category)
		return posts
	}

	return posts
}

export async function getPost(slug: string) {
	const posts = import.meta.glob('/posts/*/*.md', {
		as: 'raw',
	})

	const postLoader = posts[`/posts/${slug}/${slug}.md`];
	if (!postLoader) throw new Error('Post does not exist');

	const markdown = await postLoader();
	return markdownToHTML(markdown)
}
