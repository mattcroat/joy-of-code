import { getPosts } from '$lib/api/posts'

export async function load() {
	const { series } = await getPosts()
	return { posts: series }
}
