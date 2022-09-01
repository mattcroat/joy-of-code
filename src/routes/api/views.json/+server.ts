import { json } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

import { supabase } from '$lib/supabase'

export const GET: RequestHandler = async () => {
	const { data: views, error } = await supabase
		.from('views')
		.select('slug, views')

	if (error) {
		return json({ error: error.message })
	}

	return json(views, {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
		},
	})
}
