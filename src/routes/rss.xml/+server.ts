import RSS from 'rss'

import { siteDescription, siteTitle, siteUrl } from '$lib/api/config'
import { getPostsData } from '$lib/api/posts'

export async function GET() {
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

	const headers = { 'Content-Type': 'application/xml' }

	return new Response(feed.xml(), { headers })
}
