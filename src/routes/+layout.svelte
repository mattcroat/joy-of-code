<script lang="ts">
	import { fly } from 'svelte/transition'
	import Header from '$lib/ui/header/header.svelte'
	import Footer from '$lib/ui/footer.svelte'
	import LiteYouTubeEmbed from '$lib/embed/youtube.svelte'
	import '../styles/styles.scss'

	export let data
</script>

<LiteYouTubeEmbed />

<div class="grid">
	<Header />
	{#key data.url}
		<div in:fly={{ y: -50, duration: 250 }}>
			<slot />
		</div>
	{/key}
	<Footer />
</div>

<style>
	:global(.grid) {
		height: 100%;
		max-width: 1200px;
		display: grid;
		grid-template-columns: repeat(12, [column-start] 1fr);
		column-gap: var(--spacing-24);
		margin-inline: auto;
		padding: 0 var(--spacing-16);
	}

	:global(.grid > *) {
		grid-column: column-start / span 12;
	}

	@media (min-width: 1240px) {
		.grid {
			padding: 0;
		}
	}
</style>
