import { error } from '@sveltejs/kit'
import * as config from '$lib/site/config'
import { getPosts } from '$lib/site/posts'

export async function load({ params }) {
	const category = params.category

	if (!config.categories[category]) {
		throw error(404, 'Category does not exist')
	}

	try {
		return {
			posts: await getPosts({ category }),
		}
	} catch (e) {
		throw error(404, `Failed to load posts`)
	}
}
