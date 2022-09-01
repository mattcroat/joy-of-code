<script lang="ts">
	import Header from '$lib/shared/ui/header/header.svelte'
	import Footer from '$lib/shared/ui/footer.svelte'
	import Transition from '$lib/shared/transition/index.svelte'
	import Analytics from '$lib/analytics/index.svelte'

	import '../styles/styles.scss'
</script>

<Analytics />

<Transition transition={{ type: 'fade', duration: 250 }}>
	<div class="grid">
		<Header />
		<Transition transition={{ type: 'page' }}>
			<slot />
		</Transition>
		<Footer />
	</div>
</Transition>

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
