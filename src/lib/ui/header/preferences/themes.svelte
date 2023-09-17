<script lang="ts">
	import { browser } from '$app/environment'

	type Themes = { name: keyof typeof themes }

	const themes = {
		'🌛 Night': { name: '🌛 Night' },
		'☀️ Daylight': { name: '☀️ Daylight' },
		'🐺 Night Howl': { name: '🐺 Night Howl' },
		'🧠 Night Mind': { name: '🧠 Night Mind' },
	}

	let selectedTheme = getTheme() ?? themes['🌛 Night']

	function getTheme() {
		if (!browser) return

		const htmlElement = document.documentElement
		const userTheme = localStorage.theme
		const prefersDarkMode = window.matchMedia(
			'prefers-color-scheme: dark'
		).matches
		const prefersLightMode = window.matchMedia(
			'prefers-color-scheme: light'
		).matches

		// check if the user set a theme
		if (userTheme) {
			htmlElement.dataset.theme = userTheme
			return themes[userTheme]
		}

		// otherwise check for user preference
		if (!userTheme && prefersDarkMode) {
			htmlElement.dataset.theme = '🌛 Night'
			localStorage.theme = '🌛 Night'
		}
		if (!userTheme && prefersLightMode) {
			htmlElement.dataset.theme = '☀️ Daylight'
			localStorage.theme = '☀️ Daylight'
		}

		// if nothing is set default to dark mode
		if (!userTheme && !prefersDarkMode && !prefersLightMode) {
			htmlElement.dataset.theme = '🌛 Night'
			localStorage.theme = '🌛 Night'
		}

		return themes[userTheme]
	}

	function updateTheme(selectedTheme: Themes) {
		if (browser) {
			const htmlElement = document.documentElement
			htmlElement.dataset.theme = selectedTheme.name
			localStorage.theme = selectedTheme.name
		}
	}

	$: updateTheme(selectedTheme)
</script>

<div>
	<label for="theme">Theme</label>
	<select bind:value={selectedTheme.name} name="theme" id="theme">
		{#each Object.entries(themes) as [key, theme] (key)}
			<option value={theme.name}>{theme.name}</option>
		{/each}
	</select>
</div>

<style>
	select {
		padding: var(--spacing-16) var(--spacing-24);
		font-weight: 700;
		background-color: var(--clr-primary);
		color: var(--clr-theme-txt);
		border-radius: var(--rounded-4);
		box-shadow: var(--shadow-sm);

		& option {
			font-weight: inherit;

			&:hover {
				background-color: var(--clr-theme-active);
			}
		}
	}
</style>
