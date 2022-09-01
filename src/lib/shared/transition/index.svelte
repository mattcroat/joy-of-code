<script lang="ts">
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'

	type Transition = {
		type: 'fade' | 'stagger' | 'page'
		duration?: number
		delay?: number
	}

	export let transition: Transition
</script>

{#if transition.type === 'page'}
	{#key $page.url}
		<div in:fly={{ y: -50, duration: 250 }}>
			<slot />
		</div>
	{/key}
{/if}

{#if transition.type === 'fade'}
	<div
		class="fade"
		style:animation-duration="{transition.duration}ms"
		style:animation-delay="{transition.delay}ms"
	>
		<slot />
	</div>
{/if}

{#if transition.type === 'stagger'}
	<div
		class="stagger"
		style:animation-duration="{transition.duration * 300}ms"
		style:animation-delay="{transition.delay}ms"
	>
		<slot />
	</div>
{/if}

<style>
	div {
		height: 100%;
	}

	.fade {
		animation-name: fadeIn;
	}

	.stagger {
		opacity: 0;
		animation-name: stagger;
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes stagger {
		from {
			opacity: 0;
			transform: translateY(50px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
