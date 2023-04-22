import { fetchJSON } from '$lib/site/posts.js'
import * as config from '$lib/site/config'
import type { Post } from '$lib/types/index.js'

export async function GET({ fetch }) {
	const posts: Post[] = await fetchJSON('api/posts', fetch)

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.siteName}</title>
				<description>${config.siteDescription}</description>
				<link>${config.siteUrl}</link>
				<atom:link href="${
					config.siteUrl
				}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.siteUrl}/${post.slug}</link>
							<guid isPermaLink="true">${config.siteUrl}/${post.slug}</guid>
							<pubDate>${new Date(post.published).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
