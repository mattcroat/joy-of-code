<script lang="ts">
	import Menu from './menu.svelte'
	import Preferences from './preferences/index.svelte'
	import * as config from '$lib/site/config'
	import Logo from './logo.svelte'
	import Search from './search'

	let scrollY: number
	$: fixed = scrollY > 0
</script>

<svelte:window bind:scrollY />

<header class:fixed>
	<div class="container">
		<div class="logo">
			<Logo />
			<a href="/">{config.siteName}</a>
		</div>

		<Search />

		<nav>
			<Preferences />
			<Menu />
		</nav>
	</div>
</header>

<style>
	header {
		width: 90%;
		max-width: 800px;
		margin-inline: auto;
		padding: var(--spacing-16) var(--spacing-24);
		border-radius: 1rem;
		z-index: 20;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.fixed {
		position: fixed;
		top: 10px;
		left: 50%;
		translate: -50% 0;
		background-color: var(--clr-header-bg);
		color: var(--clr-primary);
		box-shadow: var(--shadow-md);
		box-shadow: 1px 1px 10px hsl(0 0% 0% / 40%);
		backdrop-filter: blur(20px);
	}

	.container {
		max-inline-size: 1200px;
		display: flex;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
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
