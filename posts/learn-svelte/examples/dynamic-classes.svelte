<script lang="ts">
	let open = $state(false)
</script>

<div class="container">
	<button onclick={() => (open = !open)}>
		<span>Accordion</span>
		<span class="trigger {open ? 'open' : ''}">👈️</span>
	</button>
</div>

<style>
	.container {
		button {
			border: none;
		}
	}

	.trigger {
		display: inline-block;
		transition: rotate 0.2s ease;

		&.open {
			rotate: -90deg;
		}
	}
</style>
