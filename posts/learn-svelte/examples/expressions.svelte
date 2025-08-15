<script lang="ts">
	let banana = $state(1)
</script>

<div>
	<button onclick={() => banana--} disabled={banana === 0}>-</button>
	<span>There's {banana} {banana === 1 ? 'banana' : 'bananas'} left</span>
	<button onclick={() => banana++}>+</button>
</div>

<style>
	div {
		display: flex;
		align-items: center;

		span {
			width: 240px;
		}
	}
</style>
