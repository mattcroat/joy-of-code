<script lang="ts">
	let count = $state(0)
</script>

<div class="container">
	<button onclick={() => (count += 1)}>
		Count: {count}
	</button>
</div>
