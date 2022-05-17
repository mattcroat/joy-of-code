import type { RequestHandler } from '@sveltejs/kit'

import { getPosts } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const { posts } = await getPosts()

  return {
    status: 200,
    body: { posts },
    headers: {
      'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
    },
  }
}
