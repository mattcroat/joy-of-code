<script lang="ts">
	import { page } from '$app/stores'
	import * as config from '$lib/site/config'

	import Heading from '$lib/ui/heading.svelte'
	import Posts from '$lib/ui/posts.svelte'

	export let data

	const { posts } = data
	const category = $page.params.category
</script>

<svelte:head>
	<title>{config.categories[category]}</title>
	<meta content="{config.categories[category]} category." name="description" />
</svelte:head>

<Heading>{config.categories[category]}</Heading>

<Posts {posts}>
	<div class="container" slot="title">
		<div>
			<span class="tag">{category}</span>
		</div>
		<div>
			<span class="results">{posts.length}</span> results
		</div>
	</div>
</Posts>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.tag {
		padding: var(--spacing-16);
		font-weight: 700;
		background-color: var(--clr-bg);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
	}

	.results {
		font-weight: 700;
	}
</style>
