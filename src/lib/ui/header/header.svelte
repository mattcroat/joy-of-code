<script lang="ts">
	import * as config from '$lib/site/config'

	import Menu from './menu.svelte'
	import Preferences from './preferences/index.svelte'
</script>

<header>
	<div class="logo">
		<a href="/">{config.siteName}</a>
	</div>

	<nav>
		<Preferences />
		<Menu />
	</nav>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		align-self: start;
		margin-top: var(--spacing-32);
	}

	.logo {
		grid-column: 2 / 3;
		text-align: center;
		text-transform: uppercase;
	}

	.logo a::before {
		content: none;
	}

	nav {
		display: flex;
		gap: var(--spacing-16);
		margin-left: auto;
	}

	nav :global(svg) {
		cursor: pointer;
	}
</style>
