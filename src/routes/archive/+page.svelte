<script lang="ts">
	import Heading from '$lib/ui/heading.svelte'
	import Posts from '$lib/ui/posts.svelte'

	export let data
</script>

<svelte:head>
	<title>Archive</title>
	<meta content="List of {data.posts.length} posts." name="description" />
</svelte:head>

<Heading>Archive</Heading>

<Posts posts={data.posts}>
	<div class="container" slot="title">
		<h3>Posts</h3>
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
