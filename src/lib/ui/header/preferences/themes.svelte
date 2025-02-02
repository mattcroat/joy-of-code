<script lang="ts">
	import { fade } from 'svelte/transition'
	import { createSelect, melt } from '@melt-ui/svelte'
	import { browser } from '$app/environment'
	import { preferences } from './preferences.svelte'

	type Themes = { name: keyof typeof themes }

	function getTheme() {
		if (!browser) return

		const html = document.documentElement
		const userTheme: Themes['name'] = localStorage.theme
		const prefersDarkMode = window.matchMedia(
			'prefers-color-scheme: dark'
		).matches
		const prefersLightMode = window.matchMedia(
			'prefers-color-scheme: light'
		).matches

		// check if the user set a theme
		if (userTheme) {
			html.dataset.theme = userTheme
			return themes[userTheme]
		}

		// otherwise check for user preference
		if (!userTheme && prefersDarkMode) {
			html.dataset.theme = '🌛 Night'
			localStorage.theme = '🌛 Night'
		}
		if (!userTheme && prefersLightMode) {
			html.dataset.theme = '☀️ Daylight'
			localStorage.theme = '☀️ Daylight'
		}

		// if nothing is set default to dark mode
		if (!userTheme && !prefersDarkMode && !prefersLightMode) {
			html.dataset.theme = '🌛 Night'
			localStorage.theme = '🌛 Night'
		}

		return themes[userTheme]
	}

	function updateTheme(theme: string) {
		if (!browser || !theme) return
		const htmlElement = document.documentElement
		htmlElement.dataset.theme = theme
		localStorage.theme = theme
	}

	const themes = {
		'🌛 Night': { name: '🌛 Night' },
		'☀️ Daylight': { name: '☀️ Daylight' },
		'🐺 Night Howl': { name: '🐺 Night Howl' },
		'🧠 Night Mind': { name: '🧠 Night Mind' },
	} as const

	const selectedTheme = getTheme() ?? themes['🌛 Night']

	const {
		elements: { trigger, menu, option, label },
		states: { open, selected, selectedLabel },
	} = createSelect()

	$effect(() => {
		updateTheme($selectedLabel)
	})

	$effect(() => {
		preferences.resetTheme
		selected.set({ value: '🌛 Night', label: '🌛 Night' })
	})
</script>

<div class="select">
	<!-- svelte-ignore a11y_label_has_associated_control -->
	<label use:melt={$label}>Theme</label>
	<button use:melt={$trigger} class="trigger" aria-label="Theme">
		{$selectedLabel || selectedTheme.name}
	</button>
	{#if $open}
		<div use:melt={$menu} class="menu" transition:fade={{ duration: 100 }}>
			{#each Object.entries(themes) as [key, theme] (key)}
				<div use:melt={$option({ value: theme.name, label: theme.name })}>
					{theme.name}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.select {
		:where(.trigger, .menu) {
			background-color: var(--clr-primary);
			color: var(--clr-theme-txt);
			border-radius: var(--rounded-4);
			box-shadow: var(--shadow-sm);
		}

		.trigger {
			width: 180px;
			padding: var(--spacing-16) var(--spacing-24);
			font-weight: 700;
		}

		.menu {
			display: grid;
			gap: var(--spacing-24);
			padding: var(--spacing-16);
			font-weight: 500;
		}
	}
</style>
