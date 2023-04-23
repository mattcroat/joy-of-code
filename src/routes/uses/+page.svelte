<script lang="ts">
	import Heading from '$lib/ui/heading.svelte'
</script>

<svelte:head>
	<title>Uses</title>
	<meta
		content="List of things I use from my code editor to fonts and themes."
		name="description"
	/>
</svelte:head>

<Heading>Uses</Heading>

<div class="categories">
	<div class="category">
		<p>Operating system</p>
		<a href="https://manjaro.org/" target="_blank" rel="noreferrer">
			Linux Manjaro (GNOME)
		</a>
	</div>

	<div class="category">
		<p>Terminal</p>
		<div>
			<a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">
				Oh My ZSH (Z Shell)
			</a>
			<a href="https://starship.rs/" target="_blank" rel="noreferrer">
				Starship (Cross-Shell Prompt)
			</a>
		</div>
	</div>

	<div class="category">
		<p>Code editor</p>
		<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
			Visual Studio Code
		</a>
	</div>

	<div class="category">
		<p>Editor Theme</p>
		<div>
			<a
				href="https://marketplace.visualstudio.com/items?itemName=Matia.night-howl"
				target="_blank"
				rel="noreferrer"
			>
				Night Howl
			</a>
			<a
				href="https://marketplace.visualstudio.com/items?itemName=pmndrs.pmndrs"
				target="_blank"
				rel="noreferrer"
			>
				Poimandres
			</a>
		</div>
	</div>

	<div class="category">
		<p>Icon Theme</p>
		<div>
			<a
				href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
			>
				Material Icon Theme
			</a>
			<a
				href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
			>
				Symbols
			</a>
		</div>
	</div>

	<div class="category">
		<p>Coding Font</p>
		<a href="https://www.monolisa.dev/" target="_blank" rel="noreferrer">
			MonoLisa (Cascadia Code and Mononoki are free alternatives that look the
			same)
		</a>
	</div>

	<div class="category">
		<p>More Coding Fonts</p>
		<div>
			<a
				href="https://www.marksimonson.com/fonts/view/anonymous-pro"
				target="_blank"
				rel="noreferrer"
			>
				Anonymous Pro
			</a>
			<a
				href="https://github.com/microsoft/cascadia-code"
				target="_blank"
				rel="noreferrer"
			>
				Cascadia Code
			</a>
			<a
				href="https://github.com/tonsky/FiraCode"
				target="_blank"
				rel="noreferrer"
			>
				Fira Code
			</a>
			<a
				href="https://fonts.google.com/specimen/IBM+Plex+Mono"
				target="_blank"
				rel="noreferrer"
			>
				IBM Plex Mono
			</a>
			<a
				href="https://madmalik.github.io/mononoki/"
				target="_blank"
				rel="noreferrer"
			>
				Mononoki
			</a>
			<a
				href="https://fonts.google.com/specimen/Source+Code+Pro"
				target="_blank"
				rel="noreferrer"
			>
				Source Code Pro
			</a>
		</div>
	</div>
</div>

<style>
	.categories {
		display: grid;
		row-gap: var(--spacing-32);
	}

	.category p {
		max-width: 400px;
		font-size: var(--font-24);
		font-weight: 700;
		line-height: 32px;
		text-transform: capitalize;
		justify-self: end;
	}

	.category a {
		width: max-content;
		max-width: 300px;
		display: block;
		margin: var(--spacing-16) 0;
		font-weight: inherit;
	}

	@media (min-width: 680px) {
		.category {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-64);
			align-items: baseline;
		}

		.category p {
			text-align: right;
		}
	}

	@media (min-width: 860px) {
		.category a {
			max-width: 400px;
		}
	}
</style>
