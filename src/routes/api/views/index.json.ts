import type { RequestHandler } from '@sveltejs/kit'

import { supabase } from '$root/lib/supabase'

export const get: RequestHandler = async () => {
  const { data: views, error } = await supabase
    .from('views')
    .select('slug, views')

  if (error) {
    return { response: 400, body: { error: error.message } }
  }

  return {
    response: 202,
    body: views,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
    },
  }
}
