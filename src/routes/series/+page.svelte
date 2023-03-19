<script lang="ts">
	import Heading from '$lib/shared/ui/heading.svelte'
	import Posts from '$lib/shared/ui/posts.svelte'

	export let data
</script>

<svelte:head>
	<title>Series</title>
</svelte:head>

<Heading>Series</Heading>

<Posts posts={data.posts}>
	<div class="container" slot="title">
		<h3>Entries</h3>
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
