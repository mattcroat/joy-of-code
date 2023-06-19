<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import ChevronDoubleLeft from '@rgossiaux/svelte-heroicons/outline/ChevronDoubleLeft'
	import ChevronDoubleRight from '@rgossiaux/svelte-heroicons/outline/ChevronDoubleRight'

	let tableOfContents = null
	let showSidebar = false

	function getTableOfContents() {
		const postTableOfContentsEl = document.querySelector(
			'#table-of-contents + ul'
		) as HTMLUListElement
		tableOfContents = postTableOfContentsEl.outerHTML
	}

	function openSidebar() {
		const targetEl = document.querySelector('#table-of-contents + ul')
		const observer = new IntersectionObserver(([entry]) => {
			entry.boundingClientRect.bottom < 0
				? (showSidebar = true)
				: (showSidebar = false)
		})
		observer.observe(targetEl)

		return () => {
			observer.unobserve(targetEl)
		}
	}

	onMount(() => {
		getTableOfContents()
		return openSidebar()
	})

	function toggleSidebar() {
		showSidebar = !showSidebar
	}
</script>

<aside>
	<section>
		{#if !showSidebar}
			<button
				on:click={toggleSidebar}
				in:fly={{ x: '100%', duration: 300, delay: 300 }}
				class="sidebar-toggle"
				aria-label="Show table of contents"
			>
				<ChevronDoubleLeft width="24" height="24" aria-hidden="true" />
			</button>
		{/if}

		{#if showSidebar}
			<div
				class="table-of-contents"
				transition:fly={{ x: '100%', duration: 300 }}
			>
				<button on:click={toggleSidebar} aria-label="Hide table of contents">
					<ChevronDoubleRight width="24" height="24" aria-hidden="true" />
				</button>

				<h2 class="table-of-contents-title">Table of contents</h2>
				{@html tableOfContents}
			</div>
		{/if}
	</section>
</aside>

<style>
	aside {
		max-width: 280px;
		position: fixed;
		top: 50%;
		right: 8px;
		translate: 0% -50%;
		z-index: 10;
	}

	.sidebar-toggle,
	.table-of-contents {
		padding: var(--spacing-24);
		background-color: var(--clr-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
	}

	.table-of-contents {
		counter-reset: section;
	}

	.table-of-contents button {
		padding-block: var(--spacing-8);
	}

	.table-of-contents-title {
		font-size: var(--font-16);
		text-transform: uppercase;
	}

	:global(.table-of-contents ul) {
		max-height: 400px;
		overflow-y: scroll;
	}

	:global(.table-of-contents li) {
		margin-top: var(--font-16);
		font-weight: 400;
	}

	:global(.table-of-contents a) {
		display: inline-block;
		color: var(--clr-menu-text);
		font-weight: 400;
	}

	:global(.table-of-contents a::before) {
		all: unset;
		counter-increment: section;
		content: counter(section) '. ';
	}
</style>
