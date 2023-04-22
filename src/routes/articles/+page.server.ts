import { getPosts } from '$lib/api/posts'

export async function load() {
	const { posts } = await getPosts()
	return { posts }
}
