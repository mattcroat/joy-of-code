import { getRateLimit } from '$root/lib/posts'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: { limit: await getRateLimit() },
  }
}
