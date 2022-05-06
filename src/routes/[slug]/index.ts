import type { RequestHandler } from '@sveltejs/kit'

import { getPost } from '$root/lib/posts'

export const get: RequestHandler = async ({ params }) => {
  const { content, frontmatter } = await getPost(params.slug)

  const day = 60 * 60 * 24 * 1000
  const published = frontmatter.published
  const time = new Date().getTime() - new Date(published).getTime()
  const days = time / day
  const maxage = days > 6 ? 60 * 60 * 24 * 6 : 60

  return {
    status: 200,
    body: { content, frontmatter, maxage },
    headers: {
      'Cache-Control': `public, max-age=${maxage}, s-maxage=${maxage}`,
    },
  }
}
