import { createClient } from '@supabase/supabase-js'
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public'

export const supabase = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
)

export async function getViews() {
	try {
		const response = await fetch(`/api/views`)
		return await response.json()
	} catch (e) {
		console.error(`getViews: ${(e as Error).message}`)
	}
}

export async function updateViews(slug: string) {
	try {
		await fetch(`/api/views/${slug}`, {
			method: 'POST',
			body: JSON.stringify(slug),
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (e) {
		console.error(
			`Update views: ${(e as Error).message} for /api/views/${slug}`
		)
	}
}
