import { error, json } from '@sveltejs/kit'
import { getPosts } from '$lib/site/posts'

export const prerender = false

export async function GET({ url }) {
	const limit = Number(url.searchParams.get('limit'))
	const category = url.searchParams.get('category')

	try {
		const posts = await getPosts({ limit, category })
		return json(posts)
	} catch (e) {
		throw error(404, 'Failed to load posts')
	}
}
