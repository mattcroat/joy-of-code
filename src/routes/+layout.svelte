<script lang="ts">
	import { fly } from 'svelte/transition'

	import Header from '$lib/ui/header/header.svelte'
	import Footer from '$lib/ui/footer.svelte'
	import LiteYouTubeEmbed from '$lib/embed/youtube.svelte'
	import Analytics from './analytics.svelte'

	import '../styles/styles.scss'

	export let data
</script>

<Analytics />
<LiteYouTubeEmbed />

<div>
	<Header />

	<div class="layout">
		{#key data.url}
			<div in:fly={{ y: -50, duration: 250 }}>
				<slot />
			</div>
		{/key}

		<Footer />
	</div>
</div>

<style>
	.layout {
		max-inline-size: 1200px;
		display: grid;
		column-gap: var(--spacing-24);
		margin-inline: auto;
		padding: 0 var(--spacing-16);
	}

	@media (min-width: 1240px) {
		.layout {
			padding: 0;
		}
	}
</style>
