import type { RequestHandler } from '@sveltejs/kit'

import { editPost, getPost } from '$root/lib/posts'

export const get: RequestHandler = async ({ params }) => {
  const { frontmatter, postMarkdown } = await getPost(params.slug)

  return {
    body: {
      slug: params.slug,
      title: frontmatter.title,
      markdown: postMarkdown,
    },
  }
}

export const post: RequestHandler = async ({ params, request }) => {
  const form = await request.formData()
  const markdown = String(form.get('markdown'))

  try {
    await editPost(params.slug, markdown)
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
