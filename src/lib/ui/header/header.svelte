<script lang="ts">
	import Menu from './menu.svelte'
	import Preferences from './preferences/index.svelte'
	import * as config from '$lib/site/config'
</script>

<header>
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
		background-image: linear-gradient(hsl(0 0% 0% / 40%), transparent);
		z-index: 10;
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
