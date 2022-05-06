import type { RequestHandler } from '@sveltejs/kit'

import { getPostsData } from '$root/lib/posts'
import { categories, siteUrl } from '$root/lib/config'

export const get: RequestHandler = async () => {
  const pages = [
    'articles',
    'series',
    'newsletter',
    'uses',
    'about',
    ...Object.keys(categories).map((category) => `categories/${category}`),
    ...(await getPostsData()).map((post) => post.slug),
  ]

  console.log(pages)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${siteUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
        })
        .join('')}
    </urlset>
  `.trim()

  return {
    status: 200,
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': `public, max-age=${60 * 60 * 24}, s-maxage=${
        60 * 60 * 24
      }`,
    },
  }
}
