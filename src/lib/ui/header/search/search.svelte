<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { createDialog, melt } from '@melt-ui/svelte'
	import { browser } from '$app/environment'
	import SearchIcon from './search-icon.svelte'
	import SearchWorker from './search-worker?worker'
	import { onNavigate } from '$app/navigation'
	import type { Result } from './search'

	onMount(() => {
		searchWorker = new SearchWorker()
		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data
			type === 'ready' && (search = 'ready')
			type === 'results' && (results = payload.results)
		})
		searchWorker.postMessage({ type: 'load' })
	})

	onNavigate(() => {
		$open = false
	})

	const {
		elements: { trigger, portalled, overlay, content },
		states: { open },
	} = createDialog()
	const platform = browser && window.navigator.platform

	let search: 'idle' | 'load' | 'ready' = 'idle'
	let searchTerm = ''
	let results: Result[] = []
	let searchWorker: Worker

	$: if (search === 'ready') {
		searchWorker.postMessage({ type: 'search', payload: { searchTerm } })
	}

	$: if (searchTerm && !$open) {
		searchTerm = ''
	}

	async function handleKeydown(e: KeyboardEvent) {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === 'k') {
				e.preventDefault()
				$open = !$open
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div use:melt={$portalled}>
	{#if $open}
		<div in:fade={{ duration: 200 }} use:melt={$overlay} class="overlay" />
		<div use:melt={$content} class="content">
			<input
				bind:value={searchTerm}
				placeholder="Search"
				autocomplete="off"
				spellcheck="false"
				type="search"
			/>

			<div class="results">
				{#if results}
					<ul>
						{#each results as result}
							{#if result.content.length > 0}
								<li>
									<a href="/{result.slug}">{@html result.title}</a>
									<ol>
										{#each result.content as content}
											<li>{@html content}</li>
										{/each}
									</ol>
								</li>
							{/if}
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>

<button use:melt={$trigger} class="open-search">
	<SearchIcon />
	<span>Search</span>
	<div class="shortcut">
		<kbd>{platform === 'MacIntel' ? '⌘' : 'Ctrl'}</kbd> + <kbd>K</kbd>
	</div>
</button>

<style>
	.overlay {
		position: fixed;
		inset: 0px;
		background-color: hsl(0 0% 0% / 80%);
		backdrop-filter: blur(4px);
		z-index: 30;
	}

	.content {
		width: 90vw;
		max-width: 600px;
		position: fixed;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: var(--rounded-4);
		color: var(--clr-menu-text);
		background-image: var(--clr-menu-bg);
		overflow: hidden;
		z-index: 40;

		& input {
			width: 100%;
			padding: var(--spacing-16);
			color: #fff;
			background-color: hsl(216 7% 20%);

			&:focus {
				box-shadow: none;
				border-radius: 0px;
			}
		}
	}

	.results {
		max-height: 80vh;
		padding: var(--spacing-16);
		overflow-y: auto;
		scrollbar-width: thin;

		& ol {
			margin-block-start: var(--spacing-8);
		}

		& li:not(:last-child) {
			margin-block-end: var(--spacing-16);
			padding-block-end: var(--spacing-16);
			border-bottom: 1px solid #fff;
		}

		& a {
			display: block;
			font-size: var(--font-24);
		}
	}

	.open-search {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
		padding: var(--spacing-8) var(--spacing-16);
		border-radius: var(--rounded-20);

		color: var(--clr-menu-text);
		background-image: var(--clr-menu-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		transition: color 0.3s ease;

		&:hover {
			color: var(--clr-primary);
		}
	}
</style>