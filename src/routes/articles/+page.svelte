<script lang="ts">
	import Heading from '$root/components/ui/heading.svelte'
	import Posts from '$root/components/ui/posts.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<svelte:head>
	<title>Articles</title>
	<meta content="List of {data.posts.length} articles." name="description" />
</svelte:head>

<Heading>Articles</Heading>

<Posts posts={data.posts}>
	<div class="container" slot="title">
		<h3>Archive</h3>
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

	.results {
		font-weight: 700;
	}
</style>
