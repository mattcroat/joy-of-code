import type { RequestHandler } from '@sveltejs/kit'

import { createPost } from '$root/lib/posts'

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const slug = String(form.get('slug'))
  const markdown = String(form.get('markdown'))

  try {
    await createPost(slug, markdown)
  } catch (error) {
    return {
      status: 400,
      body: { error: error.message },
    }
  }

  return {
    status: 303,
    headers: { location: '/' },
  }
}
