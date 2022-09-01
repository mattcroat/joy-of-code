import { writable } from 'svelte/store'
import { browser } from '$app/environment'

import { getViews } from '$lib/database'

if (browser) {
	getViews().then((result) => {
		views.set(result)
	})
}

export const views = writable([])
