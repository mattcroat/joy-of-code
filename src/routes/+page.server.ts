import { fetchJSON } from '$lib/site/posts'
import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
	try {
		const posts = await fetchJSON('/api/posts', fetch)
		return { posts: posts.slice(0, 10) }
	} catch (e) {
		throw error(404, (e as Error).message)
	}
}
