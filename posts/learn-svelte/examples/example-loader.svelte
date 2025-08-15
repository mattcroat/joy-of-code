<script lang="ts">
	import { fade } from 'svelte/transition'
	import type { Component as SvelteComponent } from 'svelte'

	let { name } = $props()
	let status = $state<'load' | 'loaded'>('load')
	let Component = $state<SvelteComponent>(null)

	// @ts-ignore
	const modules = import.meta.glob('./*.svelte')

	async function load() {
		const module = modules[`./${name}.svelte`]
		if (module) {
			Component = (await module()).default
			status = 'loaded'
		} else {
			console.error(`${name}.svelte not found`)
		}
	}
</script>

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
	></script>
	<script
		src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Flip.min.js"
	></script>
</svelte:head>

<div class="example">
	{#if status === 'load'}
		<button onclick={load}>Show example</button>
	{:else}
		<div transition:fade>
			<Component />
		</div>
	{/if}
</div>

<style>
	.example {
		height: 400px;
		display: grid;
		place-content: center;
		margin-bottom: var(--spacing-32);
		padding: var(--spacing-24);
		background: var(--clr-code-bg);
		border-radius: var(--rounded-20);
		text-align: center;
		box-shadow: var(--shadow-md);

		:global(button) {
			padding: var(--spacing-16);
			border: 4px solid var(--clr-primary);
			border-radius: var(--rounded-20);
			text-transform: capitalize;
			transition: scale 0.15s ease-out;

			&:active {
				scale: 0.9;
			}
		}
	}
</style>
