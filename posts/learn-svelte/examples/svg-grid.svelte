<script lang="ts">
	let size = 300
	let tiles = $state(8)
</script>

<div class="container">
	<svg width={size} height={size}>
		{#each Array(tiles), col}
			{#each Array(tiles), row}
				{@const tile = size / tiles}
				{@const x = col * tile}
				{@const y = row * tile}
				{@const width = tile}
				{@const height = tile}
				{@const fill = (col + row) % 2 === 0 ? 'orangered' : 'white'}
				<rect {x} {y} {width} {height} {fill} />
			{/each}
		{/each}
	</svg>

	<label>
		<span>{tiles} tiles:</span>
		<input type="range" bind:value={tiles} min={1} max={40} />
	</label>
</div>

<style>
	label {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
		margin-top: var(--spacing-16);
	}
</style>
