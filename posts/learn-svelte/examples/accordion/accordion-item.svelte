<script lang="ts">
	import type { Snippet } from 'svelte'
	import { slide } from 'svelte/transition'

	interface Props {
		title: string
		children: Snippet
	}

	let { title, children }: Props = $props()

	let open = $state(false)

	function toggle() {
		open = !open
	}
</script>

<div class="accordion-item">
	<button onclick={toggle} class="accordion-heading">
		<div>{title}</div>
		<div class="accordion-trigger" class:open>👈️</div>
	</button>

	{#if open}
		<div transition:slide class="accordion-content">
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.accordion-item {
		&:not(:last-child) {
			margin-bottom: var(--spacing-24);
		}

		.accordion-heading {
			display: flex;
			gap: var(--spacing-32);
			padding: 0px;
			border: none;
		}

		.accordion-trigger {
			transition: rotate 0.2s ease;

			&.open {
				rotate: -90deg;
			}
		}

		.accordion-content {
			margin-top: var(--spacing-8);
		}
	}
</style>
