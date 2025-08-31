<script lang="ts">
	import { getAbortSignal } from 'svelte'
	import { SvelteMap } from 'svelte/reactivity'

	let name = $state('')

	const pokemon = new SvelteMap<string, unknown>()

	async function getPokemon() {
		if (!name || pokemon.has(name)) return

		const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
		const response = await fetch(`${baseUrl}/${name}`, {
			signal: getAbortSignal(),
		})
		if (!response.ok) throw new Error('💣️ oops!')
		const data = await response.json()

		pokemon.set(name, data)
	}

	$effect(() => {
		getPokemon()
	})
</script>

<div class="container">
	<div style:width="400px">
		<input type="search" bind:value={name} placeholder="Enter Pokemon name" />

		<div class="pokemon">
			{#each pokemon as [name, details]}
				<details>
					<summary>{name}</summary>
					<div class="data">
						<pre>{JSON.stringify(details, null, 2)}</pre>
					</div>
				</details>
			{/each}
		</div>

		<button onclick={() => pokemon.clear()}>🧹 Clear</button>
	</div>
</div>

<style>
	.container {
		text-align: left;
	}

	input,
	button {
		width: 100%;
	}

	input {
		margin-bottom: var(--spacing-32);
		padding: var(--spacing-16);
		color: #000;
		border-radius: var(--rounded-20);
	}

	summary {
		text-transform: capitalize;
	}

	details {
		overflow: hidden;
		margin-bottom: var(--spacing-32);

		.data {
			height: 200px;
		}
	}
</style>
