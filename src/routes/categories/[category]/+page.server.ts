import { error } from '@sveltejs/kit'
import { getPostsByCategory } from '$lib/site/posts'
import * as config from '$lib/site/config'

export async function load({ params }) {
	const category = params.category

	if (!config.categories[category]) {
		throw error(404, 'Category does not exist')
	}

	try {
		return {
			posts: await getPostsByCategory(category),
		}
	} catch (e) {
		throw error(404, `Failed to load posts`)
	}
}
