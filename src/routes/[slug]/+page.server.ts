import { getPost } from '$lib/api/posts'

export async function load({ params }) {
	const { content, frontmatter } = await getPost(params.slug)
	return { content, frontmatter }
}
