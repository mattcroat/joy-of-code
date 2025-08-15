<script lang="ts">
	import { tick } from 'svelte'

	gsap.registerPlugin(Flip)

	let items = $state([...Array(10).keys()])
	let ready = $state(false)

	$effect.pre(() => {
		// track `items` as a dependency
		items
		// measure elements before the DOM updates
		const state = Flip.getState('.item')
		// wait for the DOM update
		tick().then(() => {
			// do the FLIP animation
			Flip.from(state, { duration: 1, stagger: 0.01, ease: 'power1.inOut' })
		})
	})

	function shuffle() {
		items = items.toSorted(() => Math.random() - 0.5)
	}
</script>

<div class="container">
	{#each items as item (item)}
		<div class="item">{item}</div>
	{/each}
</div>

<button onclick={shuffle}>Shuffle</button>

<style>
	.container {
		width: 600px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--spacing-8);
		color: orangered;
		font-size: var(--font-32);
		font-weight: 700;
		text-shadow: 2px 2px 0px #000;

		.item {
			display: grid;
			place-content: center;
			aspect-ratio: 1;
			background-color: #222;
			border: 1px solid #333;
			border-radius: var(--rounded-20);
		}
	}

	button {
		margin-top: var(--spacing-24);
	}
</style>
