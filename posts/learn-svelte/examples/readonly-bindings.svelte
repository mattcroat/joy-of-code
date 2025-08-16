<script lang="ts">
	let width = $state()
	let height = $state()
</script>

<div class="container">
	<div class="example" bind:clientWidth={width} bind:clientHeight={height}>
		<div class="text" contenteditable>Edit this text</div>
		<div class="size">{width} x {height}</div>
	</div>
</div>

<style>
	.example {
		position: relative;
		display: inline-block;
		padding: 0.5rem;
		border: 1px solid orangered;

		.text {
			font-size: 2rem;
		}

		.size {
			position: absolute;
			left: 50%;
			bottom: 0px;
			padding: 0.5rem;
			translate: -50% 100%;
			color: black;
			background-color: orangered;
			font-weight: 700;
			white-space: pre;
		}
	}
</style>
