<script lang="ts">
	import { fade } from 'svelte/transition'
	import { createPopover, melt } from '@melt-ui/svelte'
	import { Menu } from '$lib/icons'
	import { sounds } from '$lib/stores/sfx'
	import * as config from '$lib/site/config'

	const {
		elements: { trigger, content },
		states: { open },
	} = createPopover({
		arrowSize: 16,
		positioning: {
			gutter: 20,
		},
	})
</script>

<button
	use:melt={$trigger}
	on:click={() => $sounds.click()}
	aria-label="Categories"
>
	<Menu width={24} height={24} aria-hidden={true} />
</button>

{#if open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class="content"
	>
		<div class="menu">
			<span class="title">Categories</span>
			<ul>
				{#each Object.entries(config.categories) as [slug, category]}
					<li>
						<a href="/categories/{slug}">{category}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style>
	.content {
		z-index: 20;
	}

	.menu {
		position: relative;
		background-image: var(--clr-menu-bg);
		padding: var(--spacing-24);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-lg);
	}

	.menu .title {
		display: block;
		padding-bottom: var(--spacing-24);
		font-size: var(--font-24);
		font-weight: 700;
		line-height: 32px;
		border-bottom: 1px solid var(--clr-menu-border);
	}

	.menu a {
		font-weight: inherit;
		color: var(--clr-menu-text);
	}

	.menu a:hover {
		color: var(--clr-primary);
	}

	.menu ul {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		row-gap: var(--spacing-24);
		column-gap: var(--spacing-64);
		grid-auto-flow: column;
		margin-top: var(--spacing-24);
	}

	@media (min-width: 480px) {
		.menu ul {
			grid-template-rows: repeat(4, 1fr);
		}
	}
</style>
