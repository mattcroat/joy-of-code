<script lang="ts">
	import { crossfade } from 'svelte/transition'

	const [send, receive] = crossfade({})

	interface Post {
		id: number
		title: string
		description: string
		published: boolean
	}

	let posts = $state<Post[]>([
		{
			id: 1,
			title: 'Post A',
			description: 'Content',
			published: true,
		},
		{
			id: 2,
			title: 'Post B',
			description: 'Content',
			published: true,
		},
		{
			id: 3,
			title: 'Post C',
			description: 'Content',
			published: true,
		},
		{
			id: 4,
			title: 'Post D',
			description: 'Content',
			published: true,
		},
	])

	function togglePublished(post: Post) {
		const index = posts.findIndex((p) => p.id === post.id)
		posts[index].published = !posts[index].published
	}

	function removePost(post: Post) {
		const index = posts.findIndex((p) => p.id === post.id)
		posts.splice(index, 1)
	}
</script>

<div class="container">
	<div>
		<div class="posts">
			<div>
				<section>
					{#each posts.filter((posts) => posts.published) as post (post)}
						<article in:receive={{ key: post }} out:send={{ key: post }}>
							<h3>{post.title}</h3>
							<p>{post.description}</p>
							<div>
								<button>✏️</button>
								<button onclick={() => togglePublished(post)}>💾</button>
								<button onclick={() => removePost(post)}>❌</button>
							</div>
						</article>
					{:else}
						<p>There are no posts.</p>
					{/each}
				</section>
			</div>

			<div class="archive">
				<section>
					{#each posts.filter((posts) => !posts.published) as post (post)}
						<article in:receive={{ key: post }} out:send={{ key: post }}>
							<h3>{post.title}</h3>
							<div>
								<button onclick={() => togglePublished(post)}>♻️</button>
							</div>
						</article>
					{:else}
						<p>Archived items go here.</p>
					{/each}
				</section>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		text-align: left;
	}

	.posts {
		display: flex;

		section {
			display: grid;
			grid-template-columns: repeat(2, 240px);
			gap: var(--spacing-32);
		}
	}

	.archive {
		section {
			display: block;
			width: 200px;
			margin-top: 1rem;

			article:not(:last-child) {
				margin-bottom: var(--spacing-16);
			}
		}
	}

	p {
		margin-bottom: var(--spacing-8);
	}

	button {
		padding: var(--spacing-4);
	}
</style>
