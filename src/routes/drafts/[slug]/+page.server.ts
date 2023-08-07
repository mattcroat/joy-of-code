import { error } from '@sveltejs/kit'
import { getPost } from '$lib/site/posts'

export async function load({ params }) {
	try {
		return {
			post: await getPost(params.slug),
		}
	} catch (e) {
		throw error(404, `Post does not exist`)
	}
}
