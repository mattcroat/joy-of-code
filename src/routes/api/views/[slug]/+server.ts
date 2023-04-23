import { json } from '@sveltejs/kit'
import { supabase } from '$lib/database'

export async function POST({ request }) {
	const slug = await request.json()

	const views = await supabase
		.from('views')
		.select('views')
		.match({ slug })
		.single()

	if (!views.data) {
		const { error } = await supabase.from('views').insert({
			slug,
			views: 1,
		})

		if (error) {
			return json({ error: error.message })
		}
	}

	if (views.data) {
		const { error } = await supabase
			.from('views')
			.update({
				views: views.data.views + 1,
			})
			.match({ slug })

		if (error) {
			return json({ error: error.message })
		}
	}

	return new Response(undefined, {
		status: 303,
		headers: { location: '/' },
	})
}
