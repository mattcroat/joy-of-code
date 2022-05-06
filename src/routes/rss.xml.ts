import RSS from 'rss'
import type { RequestHandler } from '@sveltejs/kit'

import { siteDescription, siteTitle, siteUrl } from '$root/lib/config'
import { getPostsData } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const posts = await getPostsData()

  const feed = new RSS({
    title: `${siteTitle} RSS Feed`,
    description: siteDescription,
    site_url: siteUrl,
    feed_url: `${siteUrl}rss.xml`,
  })

  posts.forEach((post) =>
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}${post.slug}`,
      date: post.published,
    })
  )

  return {
    status: 200,
    body: feed.xml({ indent: true }),
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': `public, s-maxage=${60 * 60}, s-maxage=${60 * 60}`,
    },
  }
}
