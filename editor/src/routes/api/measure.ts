import type { RequestHandler } from '@sveltejs/kit'
import { getRateLimit } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: { limit: await getRateLimit() },
  }
}
