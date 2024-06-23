<script lang="ts">
	import { textSize, textLength, textHeight } from './preferences'

	function reset() {
		textSize.set(18)
		textLength.set(90)
		textHeight.set(40)

		const html = document.documentElement
		html.dataset.theme = '🌛 Night'
		delete html.dataset.font

		localStorage.theme = '🌛 Night'
		localStorage.removeItem('font')
	}
</script>

<div class="reset-preferences">
	<span>Use default settings</span>
	<button on:click={reset}>Reset</button>
</div>

<style>
	button {
		padding: var(--spacing-8) var(--spacing-16);
		font-weight: 700;
		color: var(--clr-input-txt);
		background-color: var(--clr-primary);
		border-radius: var(--rounded-4);
		box-shadow: var(--shadow-sm);
	}
</style>
