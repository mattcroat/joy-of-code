import { writable } from 'svelte/store'
import { browser } from '$app/env'

import { getViews } from '$root/lib/supabase'

if (browser) {
  getViews().then((result) => {
    views.set(result)
  })
}

export const views = writable([])
