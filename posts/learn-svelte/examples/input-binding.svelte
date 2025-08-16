<script lang="ts">
	let list = $state(['Angular', 'React', 'Svelte', 'Vue'])
	let filteredList = $derived(
		list.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
	)
	let search = $state('')
</script>

<div class="container">
	<input
		type="search"
		placeholder="Search"
		value={search}
		oninput={(e) => (search = (e.target as HTMLInputElement).value)}
	/>

	<ul>
		{#each filteredList as item}
			<li>{item}</li>
		{:else}
			<p>No results</p>
		{/each}
	</ul>
</div>

<style>
	.container {
		text-align: left;
	}

	input {
		color: #000;
		padding: var(--spacing-16);
		border-radius: var(--rounded-20);
	}

	ul {
		margin-top: var(--spacing-32);
	}
</style>
