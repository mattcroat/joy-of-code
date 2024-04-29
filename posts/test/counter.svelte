<script>
	let count = 0
</script>

<button on:click={() => count++}>
	{count}
</button>

<style>
	button {
		width: 100px;
		color: black;
		background-color: aqua;
		font-size: 2rem;
		font-weight: 700;
		padding: 1rem;
		border-radius: 4px;
	}
</style>
