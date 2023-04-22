import { json } from '@sveltejs/kit'
import { supabase } from '$lib/database'

export async function GET() {
	const { data: views, error } = await supabase
		.from('views')
		.select('slug, views')

	if (error) {
		return json({ error: error.message })
	}

	const headers = {
		'Content-Type': 'application/json',
	}

	return json(views, { headers })
}
