import type { RequestHandler } from '@sveltejs/kit'

import { supabase } from '$root/lib/supabase'

export const post: RequestHandler = async ({ request }) => {
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
      return { response: 400, body: { error: error.message } }
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
      return { response: 400, body: { error: error.message } }
    }
  }

  return {
    status: 303,
    headers: { location: '/' },
  }
}
