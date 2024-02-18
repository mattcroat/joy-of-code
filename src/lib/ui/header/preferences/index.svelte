<script lang="ts">
	import { fade } from 'svelte/transition'
	import { createPopover, melt } from '@melt-ui/svelte'
	import { Cog } from '$lib/icons'
	import { sounds } from '$lib/stores/sfx'

	import Themes from './themes.svelte'
	import Reading from './reading.svelte'
	import Dyslexic from './dyslexic.svelte'
	import Reset from './reset.svelte'

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
	<Cog width={24} height={24} aria-hidden={true} />
</button>

{#if open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class="content"
	>
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
	</div>
{/if}

<style>
	.content {
		z-index: 20;
	}

	.preferences {
		position: relative;
		background-image: var(--clr-menu-bg);
		padding: var(--spacing-24);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-lg);
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
