<script lang="ts">
	import { fade } from 'svelte/transition'
	import {
		Popover,
		PopoverButton,
		PopoverPanel,
	} from '@rgossiaux/svelte-headlessui'
	import { CogIcon } from '@rgossiaux/svelte-heroicons/outline'

	import Themes from './themes.svelte'
	import Reading from './reading.svelte'
	import Dyslexic from './dyslexic.svelte'
	import Reset from './reset.svelte'

	import { sounds } from '$lib/stores/sfx'
</script>

<div class="container">
	<Popover let:open class="popover">
		<PopoverButton aria-label="Preferences" on:click={() => $sounds.click()}>
			<CogIcon width="24" height="24" />
		</PopoverButton>

		{#if open}
			<div transition:fade={{ duration: 100 }}>
				<PopoverPanel class="popover-panel" static>
					<div class="preferences">
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

						<span class="title">Preferences</span>

						<div class="options">
							<Themes />
							<Reading />
							<Dyslexic />
							<Reset />
						</div>
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
		z-index: 10;
	}

	.container :global(.popover) {
		height: 100%;
		position: relative;
	}

	.container :global(.popover-panel) {
		position: absolute;
		top: 48px;
		right: -22px;
		z-index: 10;
	}

	.preferences {
		background-image: var(--clr-menu-bg);
		padding: var(--spacing-24);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-lg);
	}

	.preferences .arrow {
		position: absolute;
		top: -23px;
		right: 22px;
	}

	.preferences .arrow #inside {
		fill: var(--clr-menu-arrow-bg);
	}

	.preferences .arrow #outside {
		fill: var(--clr-menu-border);
	}

	.preferences .title {
		display: block;
		padding-bottom: var(--spacing-24);
		font-size: var(--font-24);
		font-weight: 700;
		line-height: 32px;
		border-bottom: 1px solid var(--clr-menu-border);
	}

	.preferences .options {
		font-weight: 500;
		color: var(--clr-menu-text);
	}

	.preferences .options > :global(*) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-32);
		padding: var(--spacing-24) 0;
	}

	.preferences .options > :global(*:not(:last-child)) {
		border-bottom: 1px solid var(--clr-menu-border);
	}

	.preferences .options > :global(*:last-child) {
		padding-bottom: 0;
	}

	.preferences .options span {
		max-width: 180px;
	}

	@media (min-width: 480px) {
		.preferences {
			width: 420px;
		}

		.preferences .options > :global(*) {
			gap: var(--spacing-64);
		}
	}
</style>
