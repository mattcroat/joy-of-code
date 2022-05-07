import type { RequestHandler } from '@sveltejs/kit'

import { getPosts, removePost, updatePosts } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const posts = await getPosts()

  return {
    status: 200,
    headers: { 'Cache-Control': `max-age=0, s-maxage=60` },
    body: { posts },
  }
}

export const post: RequestHandler = async () => {
  updatePosts()
  return {}
}

export const del: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const slug = String(form.get('slug'))

  await removePost(slug)

  return {
    status: 303,
    headers: { location: '/' },
  }
}
