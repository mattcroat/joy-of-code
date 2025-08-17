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
		<div class="actions">
			<input type="search" bind:value={name} placeholder="Enter Pokemon name" />
			<button onclick={() => pokemon.clear()}>🧹 Clear</button>
		</div>

		{#each pokemon as [name, details]}
			<details>
				<summary>{name}</summary>
				<div class="details">
					<pre>{JSON.stringify(details, null, 2)}</pre>
				</div>
			</details>
		{/each}
	</div>
</div>

<style>
	.container {
		text-align: left;
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-inline: auto;
		margin-bottom: 2rem;

		input {
			padding: 1rem;
			color: #000;
			border-radius: var(--rounded-20);
		}
	}

	summary {
		text-transform: capitalize;
	}

	.details {
		max-height: 400px;
		overflow: hidden;
	}
</style>
