import { error } from '@sveltejs/kit'

import { getPostsByCategory } from '$lib/api/posts'
import { categories } from '$lib/api/config'

export const load = async ({ params, setHeaders }) => {
	if (!categories[params.category]) {
		throw error(404)
	}

	const posts = await getPostsByCategory(params.category)

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
	})

	return { posts }
}
