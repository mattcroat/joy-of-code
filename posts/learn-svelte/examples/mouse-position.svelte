<script lang="ts">
	let mouse = $state({ x: 0, y: 0 })

	function onmousemove(e: MouseEvent) {
		const rect = this.getBoundingClientRect()
		mouse.x = e.clientX - rect.left
		mouse.y = e.clientY - rect.top
	}
</script>

<div class="container" {onmousemove}>
	The mouse position is {mouse.x.toFixed()} x {mouse.y.toFixed()}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
