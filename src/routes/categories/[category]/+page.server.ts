import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { getPostsByCategory } from '$lib/posts'
import { categories } from '$lib/config'

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	if (!categories[params.category]) {
		throw error(404)
	}

	const posts = await getPostsByCategory(params.category)

	setHeaders({
		'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
	})

	return { posts }
}
