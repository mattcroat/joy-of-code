import { createPostsIndex, searchPostsIndex } from './search'

addEventListener('message', async (e) => {
	const { type, payload } = e.data

	if (type === 'load') {
		const posts = await fetch('/api/search').then((res) => res.json())
		createPostsIndex(posts)
		postMessage({ type: 'ready' })
	}

	if (type === 'search') {
		const searchTerm = payload.searchTerm
		const results = searchPostsIndex(searchTerm)
		postMessage({ type: 'results', payload: { results, searchTerm } })
	}
})
