<script lang="ts">
	let color = $state('orangered')
</script>

<div class="container">
	<canvas
		width={400}
		height={400}
		{@attach (canvas) => {
			const context = canvas.getContext('2d')!

			$effect(() => {
				context.fillStyle = color
				context.fillRect(0, 0, canvas.width, canvas.height)
			})
		}}
	></canvas>
</div>
