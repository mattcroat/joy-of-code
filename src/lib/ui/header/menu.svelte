<script lang="ts">
	import { fade } from 'svelte/transition'
	import {
		Popover,
		PopoverButton,
		PopoverPanel,
	} from '@rgossiaux/svelte-headlessui'
	import { MenuAlt1Icon } from '@rgossiaux/svelte-heroicons/outline'

	import * as config from '$lib/site/config'
	import { sounds } from '$lib/stores/sfx'
</script>

<div class="container">
	<Popover let:open class="popover">
		<PopoverButton aria-label="Categories" on:click={() => $sounds.click()}>
			<MenuAlt1Icon width="24" height="24" />
		</PopoverButton>

		{#if open}
			<div transition:fade={{ duration: 100 }}>
				<PopoverPanel class="popover-panel" static>
					<div class="menu">
						<svg
							width="24"
							height="24"
							class="arrow"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="inside"
								d="M23 24H1L11.0909 1.98341C11.4474 1.20562 12.5526 1.20562 12.9091 1.98341L23 24Z"
								fill="none"
							/>
							<path
								id="outside"
								d="M12.8944 1.78885L24 24H23L12.9021 2.88628C12.5396 2.12822 11.4604 2.12822 11.0979 2.88628L1 24H0L11.1056 1.78885C11.4741 1.05181 12.5259 1.0518 12.8944 1.78885Z"
								fill="none"
							/>
						</svg>

						<span class="title">Categories</span>
						<ul>
							{#each Object.entries(config.categories) as [slug, category]}
								<li>
									<a href="/categories/{slug}">{category}</a>
								</li>
							{/each}
						</ul>
					</div>
				</PopoverPanel>
			</div>
		{/if}
	</Popover>
</div>

<style>
	.container {
		width: 24px;
		height: 24px;
	}

	.container :global(.popover) {
		height: 100%;
		position: relative;
	}

	.container :global(.popover-panel) {
		position: absolute;
		top: 48px;
		right: -16px;
		z-index: 10;
	}

	.menu {
		width: max-content;
		background-image: var(--clr-menu-bg);
		padding: var(--spacing-24);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-lg);
	}

	.menu .arrow {
		position: absolute;
		top: -23px;
		right: 16px;
	}

	.menu .arrow #inside {
		fill: var(--clr-menu-arrow-bg);
	}

	.menu .arrow #outside {
		fill: var(--clr-menu-border);
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
