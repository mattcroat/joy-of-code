import { json } from '@sveltejs/kit'
import { supabase } from '$lib/database'

export const prerender = false

export async function GET() {
	const { data, error } = await supabase.from('views').select('slug, views')

	if (error) {
		return json({ error: error.message })
	}

	const views = data.reduce((posts: any, post) => {
		posts[post.slug] = { views: +post.views }
		return posts
	}, {})

	const headers = {
		'Content-Type': 'application/json',
	}

	return json(views, { headers })
}
