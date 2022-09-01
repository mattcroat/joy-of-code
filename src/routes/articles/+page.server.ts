import { getPosts } from '$lib/posts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ setHeaders }) => {
	const { posts } = await getPosts()

	setHeaders({
		'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
	})

	return { posts }
}
