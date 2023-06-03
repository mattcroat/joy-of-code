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
		position: sticky;
		top: 0;
		padding: var(--spacing-16);
		z-index: 10;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.sticky {
		background-color: var(--clr-bg);
		color: var(--clr-primary);
		box-shadow: var(--shadow-md);
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
