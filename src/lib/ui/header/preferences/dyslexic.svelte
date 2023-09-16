<script lang="ts">
	import { browser } from '$app/environment'
	import { createSwitch } from '@melt-ui/svelte'

	let enabled = false

	if (browser) {
		localStorage.font ? (enabled = true) : (enabled = false)
	}

	function handleChange() {
		const htmlElement = document.documentElement
		enabled = !enabled

		if (enabled) {
			localStorage.font = 'dyslexic'
			htmlElement.dataset.font = 'dyslexic'
		}

		if (!enabled) {
			localStorage.removeItem('font')
			delete htmlElement.dataset.font
		}
	}

	const {
		elements: { root, input },
	} = createSwitch()
</script>

<form>
	<div class="container">
		<label for="dyslexic-font"> Use font for dyslexia</label>

		<button
			{...$root}
			use:root
			class="toggle"
			aria-labelledby="dyslexic-font"
			on:click={handleChange}
		>
			<span class="thumb" />
		</button>

		<input {...$input} use:input />
	</div>
</form>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.toggle {
		--width: 6.8rem;
		--padding: 1rem;
		--background: var(--clr-switch-off-bg);

		width: var(--width);
		height: 3.6rem;
		background-color: var(--background);
		border-radius: 9999px;
		transition: background-color 0.15s ease;

		& .thumb {
			--size: 3.4rem;

			display: block;
			width: var(--size);
			height: var(--size);
			background-color: var(--clr-primary);
			border-radius: 50%;
			transition: translate 0.15s ease;
		}

		&[data-state='checked'] {
			--background: var(--clr-switch-on-bg);

			& .thumb {
				translate: calc(var(--width) - var(--size)) 0px;
			}
		}
	}
</style>
