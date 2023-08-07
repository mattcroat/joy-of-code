<script lang="ts">
	import Heading from '$lib/ui/heading.svelte'
	import { PencilAltIcon } from '@rgossiaux/svelte-heroicons/outline'

	import { fade } from 'svelte/transition'

	export let data
</script>

<svelte:head>
	<title>Drafts</title>
	<meta content="List of {data.posts.length} posts." name="description" />
</svelte:head>

<Heading>Drafts</Heading>

<section>
	<div class="container">
		<h3>Posts</h3>
		<div>
			<span class="results">{data.posts.length}</span> results
		</div>
	</div>

	<div class="cards">
		{#each data.posts as post, i}
			<div
				in:fade={{
					duration: 300,
					delay: i < 4 ? 100 * i : 100 * 4,
				}}
			>
				<a href="/drafts/{post.slug}">
					<article class="card">
						<span class="views">
							<PencilAltIcon width="24" height="24" aria-hidden="true" /> Draft
						</span>

						<div class="details">
							<span class="title">{post.title}</span>
							<p class="description">{post.description}</p>
						</div>
					</article>
				</a>
			</div>
		{/each}
	</div>
</section>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.results {
		font-weight: 700;
	}

	section {
		margin-top: var(--spacing-64);
	}

	.cards {
		display: grid;
		gap: var(--spacing-24);
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin-top: var(--spacing-32);
	}

	.cards a {
		display: block;
		color: inherit;
		font-weight: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.cards a::before {
		content: none;
	}

	.card {
		height: 480px;
		display: grid;
		grid-template-rows: min-content;
		padding: var(--spacing-16);
		background-image: var(--clr-card-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s ease-in-out, box-shadow 0.3s ease,
			outline 0.1s ease;
		transform: translateZ(0);
	}

	.card:hover {
		transform: scale(1.02);
		box-shadow: var(--shadow-md), 0 0 0 4px var(--clr-primary);
	}

	.card .views {
		display: flex;
		align-items: center;
		gap: var(--spacing-4);
		font-weight: 500;
		color: var(--clr-card-txt);
	}

	.card .details {
		align-self: end;
	}

	.card .title {
		font-family: var(font-sans);
		font-size: var(--font-32);
		font-weight: 700;
		line-height: 48px;
		text-transform: capitalize;
	}

	html[data-font='dyslexic'] .card .title {
		font-family: var(--font-dyslexic);
		font-size: var(--font-24);
		line-height: 32px;
	}

	.card .description {
		margin-top: var(--spacing-8);
		color: var(--clr-card-txt);
	}
</style>
