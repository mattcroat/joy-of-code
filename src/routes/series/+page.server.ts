import { getPosts } from '$lib/api/posts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ setHeaders }) => {
	const { series } = await getPosts()

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
	})

	return { posts: series }
}
