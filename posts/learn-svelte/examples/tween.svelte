<script lang="ts">
	import { Tween } from 'svelte/motion'
	import { cubicInOut } from 'svelte/easing'

	const size = new Tween(50, { duration: 300, easing: cubicInOut })

	function onmousedown() {
		size.target = 150
	}

	function onmouseup() {
		size.target = 50
	}
</script>

<div class="container">
	<svg width="400" height="400" viewBox="0 0 400 400">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<circle
			{onmousedown}
			{onmouseup}
			cx="200"
			cy="200"
			r={size.current}
			fill="orangered"
		/>
	</svg>
</div>
