<script lang="ts">
	import { browser } from '$app/environment'

	const rootElement = browser ? document.documentElement : null
	const userTextSize = browser && localStorage.textSize
	const userTextLength = browser && localStorage.textLength
	const userTextHeight = browser && localStorage.textHeight

	let textSize = userTextSize ? userTextSize.replace('px', '') : 18
	let textLength = userTextLength ? userTextLength.replace('ch', '') : 70
	let textHeight = userTextHeight ? userTextHeight.replace('px', '') : 40

	function handleFontSizeChange() {
		localStorage.textSize = `${textSize}px`
		rootElement.style.setProperty('--post-txt-size', `${textSize}px`)
	}

	function handleTextLengthChange() {
		localStorage.textLength = `${textLength}ch`
		rootElement.style.setProperty('--post-txt-length', `${textLength}ch`)
	}

	function handleTextHeightChange() {
		localStorage.textHeight = `${textHeight}px`
		rootElement.style.setProperty('--post-txt-height', `${textHeight}px`)
	}
</script>

<div class="reading-size">
	<label for="text-size">
		<span>Reading size</span>
	</label>
	<div class="slider">
		<span>{textSize}px</span>
		<input
			on:change={handleFontSizeChange}
			bind:value={textSize}
			type="range"
			name="text-size"
			id="text-size"
			min="16"
			max="24"
			step="2"
		/>
	</div>
</div>

<div class="reading-length">
	<label for="text-length">
		<span>Reading length</span>
	</label>
	<div class="slider">
		<span>{textLength}ch</span>
		<input
			on:change={handleTextLengthChange}
			bind:value={textLength}
			type="range"
			name="text-length"
			id="text-length"
			min="60"
			max="100"
			step="10"
		/>
	</div>
</div>

<div class="reading-height">
	<label for="text-height">
		<span>Reading line height</span>
	</label>
	<div class="slider">
		<span>{textHeight}px</span>
		<input
			on:change={handleTextHeightChange}
			bind:value={textHeight}
			type="range"
			name="text-height"
			id="text-height"
			min="32"
			max="48"
			step="8"
		/>
	</div>
</div>

<style>
	.slider {
		display: grid;
		justify-items: center;
		row-gap: var(--spacing-16);
	}

	input[type='range'] {
		appearance: none;
		height: 4px;
		background-color: hsl(0 0% 24%);
		border-radius: var(--rounded-20);
	}

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 16px;
		height: 16px;
		background-color: var(--clr-primary);
		border-radius: 50%;
		box-shadow: var(--shadow-sm);
		cursor: pointer;
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		width: 16px;
		height: 16px;
		background-color: var(--clr-primary);
		border-radius: 50%;
		box-shadow: var(--shadow-sm);
		cursor: pointer;
	}
</style>
