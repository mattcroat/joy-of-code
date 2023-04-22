import { error } from '@sveltejs/kit'

import { getPostsByCategory } from '$lib/api/posts'
import { categories } from '$lib/api/config'

export async function load({ params }) {
	if (!categories[params.category]) {
		throw error(404)
	}

	return {
		posts: await getPostsByCategory(params.category),
	}
}
