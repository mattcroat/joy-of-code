<script lang="ts">
	import Menu from './menu.svelte'
	import Preferences from './preferences/index.svelte'
	import * as config from '$lib/site/config'

	let scrollY: number
	$: sticky = scrollY > 0
</script>

<svelte:window bind:scrollY />

<header class:sticky>
	<div class="container">
		<div class="logo">
			<a href="/">{config.siteName}</a>
		</div>

		<nav>
			<Preferences />
			<Menu />
		</nav>
	</div>
</header>

<style>
	header {
		max-width: 800px;
		position: sticky;
		top: 10px;
		margin-inline: auto;
		padding: var(--spacing-16);
		border-radius: 1rem;
		z-index: 20;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.sticky {
		background-color: var(--clr-bg);
		color: var(--clr-primary);
		box-shadow: var(--shadow-md);
		box-shadow: 1px 1px 10px hsl(0 0% 0% / 40%);
	}

	.container {
		max-inline-size: 1200px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-inline: auto;
	}

	.logo {
		flex: 1;
		text-align: center;
		text-transform: uppercase;
	}

	.logo a::before {
		content: none;
	}

	nav {
		display: flex;
		gap: var(--spacing-16);
	}

	nav :global(svg) {
		cursor: pointer;
	}
</style>
