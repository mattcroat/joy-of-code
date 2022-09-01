<script lang="ts">
	import { page } from '$app/stores'
	import type { PageServerData } from './$types'

	import Heading from '$lib/shared/ui/heading.svelte'
	import Posts from '$lib/shared/ui/posts.svelte'

	import { categories } from '$lib/api/config'

	export let data: PageServerData

	const category = $page.params.category
</script>

<svelte:head>
	<title>{categories[category]}</title>
	<meta content="{categories[category]} category." name="description" />
</svelte:head>

<Heading>{categories[category]}</Heading>

<Posts posts={data.posts}>
	<div class="container" slot="title">
		<div>
			<span class="tag">{category}</span>
		</div>
		<div>
			<span class="results">{data.posts.length}</span> results
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
