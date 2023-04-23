import { error, json } from '@sveltejs/kit'
import { getPosts } from '$lib/site/posts'

export async function GET() {
	try {
		const posts = await getPosts()
		return json(posts)
	} catch (e) {
		throw error(404, 'Failed to load posts')
	}
}
