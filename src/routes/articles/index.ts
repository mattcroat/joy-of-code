import type { RequestHandler } from '@sveltejs/kit'

import { getPosts } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const { posts } = await getPosts()

  const sortedPosts = posts.sort((firstElement, secondElement) => {
    return (
      new Date(secondElement.published).getTime() -
      new Date(firstElement.published).getTime()
    )
  })

  return {
    status: 200,
    body: { posts: sortedPosts },
    headers: {
      'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
    },
  }
}
