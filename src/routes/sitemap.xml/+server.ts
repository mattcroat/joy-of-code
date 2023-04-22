// import * as config from '$lib/site/config'
// import { getPostsData } from '$lib/site/posts'

export async function GET() {
	// const pages = [
	// 	'archive',
	// 	'series',
	// 	'newsletter',
	// 	'uses',
	// 	'about',
	// 	...Object.keys(config.categories).map(
	// 		(category) => `categories/${category}`
	// 	),
	// 	...(await getPostsData()).map((post) => post.slug),
	// ]

	// const sitemap = `
	//   <?xml version="1.0" encoding="UTF-8" ?>
	//   <urlset
	//     xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	//     xmlns:xhtml="https://www.w3.org/1999/xhtml"
	//     xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	//     xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	//     xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	//     xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	//   >
	//     ${pages
	// 			.map((page) => {
	// 				return `
	//           <url>
	//             <loc>${config.siteUrl}${page}</loc>
	//             <lastmod>${new Date().toISOString()}</lastmod>
	//           </url>
	//         `
	// 			})
	// 			.join('')}
	//   </urlset>
	// `.trim()

	const headers = { 'Content-Type': 'application/xml' }

	return new Response('<help></help>', { headers })
}
