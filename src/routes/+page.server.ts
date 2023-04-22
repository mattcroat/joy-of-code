import { getPosts } from '$lib/api/posts'

export async function load() {
	return {
		posts: await getPosts(),
	}
}
