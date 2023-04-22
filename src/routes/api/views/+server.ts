import { json } from '@sveltejs/kit'
import { supabase } from '$lib/database'

export const prerender = false

export async function GET() {
	const { data: posts, error } = await supabase
		.from('views')
		.select('slug, views')

	if (error) {
		return json({ error: error.message })
	}

	const headers = { 'Content-Type': 'application/json' }

	const postViews = {}

	posts.forEach(({ slug, views }) => {
		postViews[slug] = { views }
	})

	return json(postViews, { headers })
}
