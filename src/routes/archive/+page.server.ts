import { error } from '@sveltejs/kit'
import { fetchJSON } from '$lib/site/posts'

export async function load({ fetch }) {
	try {
		const posts = await fetchJSON('/api/posts', fetch)
		return { posts }
	} catch (e) {
		throw error(404, (e as Error).message)
	}
}
