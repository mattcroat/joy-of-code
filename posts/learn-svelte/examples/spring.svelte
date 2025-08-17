<script lang="ts">
	import { Spring } from 'svelte/motion'

	const size = new Spring(50, { stiffness: 0.1, damping: 0.25, precision: 0.1 })

	function onmousedown() {
		size.target = 150
	}

	function onmouseup() {
		size.target = 50
	}
</script>

<div class="container">
	<svg width="400" height="400" viewBox="0 0 400 400">
		<circle
			{onmousedown}
			{onmouseup}
			cx="200"
			cy="200"
			r={size.current}
			fill="aqua"
		/>
	</svg>
</div>
