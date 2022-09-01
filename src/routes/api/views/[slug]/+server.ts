import { json as json$1 } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

import { supabase } from '$lib/supabase'

export const POST: RequestHandler = async ({ request }) => {
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
			return json$1({ error: error.message })
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
			return json$1({ error: error.message })
		}
	}

	return new Response(undefined, { status: 303, headers: { location: '/' } })
}
