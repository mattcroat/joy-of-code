<script lang="ts">
	let color = $state('orangered')
</script>

<div class="container">
	<canvas
		width={200}
		height={200}
		{@attach (canvas) => {
			const context = canvas.getContext('2d')!

			$effect(() => {
				context.fillStyle = color
				context.fillRect(0, 0, canvas.width, canvas.height)
			})
		}}
	></canvas>
</div>
