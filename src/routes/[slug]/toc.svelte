<script lang="ts">
	import { fly } from 'svelte/transition'
	import { ChevronDoubleLeft, ChevronDoubleRight } from '$lib/icons'

	let tableOfContents = $state('')
	let showSidebar = $state(false)

	const TOC = '#table-of-contents + ul'

	function getTableOfContents() {
		const tocEl = document.querySelector(TOC) as HTMLUListElement
		if (tocEl) {
			tableOfContents = tocEl.outerHTML
		}
	}

	function openSidebar() {
		const tocEl = document.querySelector(TOC) as HTMLUListElement
		if (!tocEl) return

		const observer = new IntersectionObserver(([entry]) => {
			entry.boundingClientRect.bottom < 0
				? (showSidebar = true)
				: (showSidebar = false)
		})
		observer.observe(tocEl)

		return () => {
			observer.unobserve(tocEl)
		}
	}

	$effect(() => {
		getTableOfContents()

		const isLargeScreen = window.innerWidth >= 1440

		if (isLargeScreen) {
			return openSidebar()
		}
	})

	function toggleSidebar() {
		showSidebar = !showSidebar
	}
</script>

{#if tableOfContents}
	<aside>
		<section>
			{#if !showSidebar}
				<button
					onclick={toggleSidebar}
					in:fly={{ x: '100%', duration: 300, delay: 300 }}
					class="sidebar-toggle"
					aria-label="Show table of contents"
				>
					<ChevronDoubleLeft width={24} height={24} aria-hidden={true} />
				</button>
			{/if}

			{#if showSidebar}
				<div
					class="table-of-contents"
					transition:fly={{ x: '100%', duration: 300 }}
				>
					<button onclick={toggleSidebar} aria-label="Hide table of contents">
						<ChevronDoubleRight width={24} height={24} aria-hidden={true} />
						<h2 class="table-of-contents-title">Sections</h2>
					</button>

					{@html tableOfContents}
				</div>
			{/if}
		</section>
	</aside>
{/if}

<style>
	aside {
		max-width: 400px;
		position: fixed;
		top: 50%;
		right: 8px;
		translate: 0% -50%;
		z-index: 10;
	}

	.sidebar-toggle,
	.table-of-contents {
		padding: var(--spacing-16);
		background-color: var(--clr-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
	}

	.table-of-contents {
		counter-reset: section;

		button {
			padding-block: var(--spacing-8);
			display: flex;
			align-items: center;
			gap: var(--spacing-4);
		}

		:global {
			ul {
				max-height: 400px;
				padding: var(--spacing-4);
				overflow-y: auto;
				scrollbar-width: thin;
			}

			li {
				padding-block: var(--spacing-16);
				font-size: var(--font-18);

				&:not(:last-of-type) {
					border-bottom: 0.5px solid var(--clr-menu-border);
				}
			}

			a {
				display: inline-block;
				font-weight: 400;

				&::before {
					all: unset;
					counter-increment: section;
					content: counter(section) '. ';
				}
			}
		}

		.table-of-contents-title {
			font-size: var(--font-24);
		}
	}

	:global {
		[data-theme='🌛 Night'] .table-of-contents a {
			--color: hsl(0 0% 80%);
		}

		[data-theme='☀️ Daylight'] .table-of-contents a {
			--color: hsl(0 0% 40%);
		}

		[data-theme='🧠 Night Mind'] .table-of-contents a {
			--color: hsl(280 20% 80%);
		}
	}
</style>
