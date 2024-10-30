<script lang="ts">
	import { preferences } from './preferences.svelte'
</script>

<div class="reading-size">
	<label for="text-size">
		<span>Reading size</span>
	</label>
	<div class="slider">
		<span>{preferences.textSize}px</span>
		<input
			bind:value={preferences.textSize}
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
		<span>{preferences.textLength}ch</span>
		<input
			bind:value={preferences.textLength}
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
		<span>{preferences.textHeight}px</span>
		<input
			bind:value={preferences.textHeight}
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

		&::-webkit-slider-thumb {
			appearance: none;
			width: 16px;
			height: 16px;
			background-color: var(--clr-primary);
			border-radius: 50%;
			box-shadow: var(--shadow-sm);
			cursor: pointer;
		}

		&::-moz-range-thumb {
			appearance: none;
			width: 16px;
			height: 16px;
			background-color: var(--clr-primary);
			border-radius: 50%;
			box-shadow: var(--shadow-sm);
			cursor: pointer;
		}
	}
</style>
