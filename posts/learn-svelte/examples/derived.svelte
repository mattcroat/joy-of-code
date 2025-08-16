<script lang="ts">
	let count = $state(0)
	let factor = $state(2)
	let result = $derived(count * factor)
</script>

<div class="container">
	<div>
		<p>{count} * {factor} = {result}</p>

		<button onclick={() => count++}>Count: {count}</button>
		<button onclick={() => factor++}>Factor: {factor}</button>
	</div>
</div>

<style>
	p {
		font-size: var(--font-32);
		margin-top: var(--spacing-24);
	}
</style>
