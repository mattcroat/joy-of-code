<script lang="ts">
	let cart = $state([
		{ item: '🍎', total: 10 },
		{ item: '🍌', total: 10 },
	])
	let total = $derived.by(() => {
		let sum = 0
		for (let item of cart) {
			sum += item.total
		}
		return sum
	})
	let price = $state((Math.random() * 100).toFixed())
</script>

<div class="container">
	<div>
		<h2>Random Item</h2>
		<p>Price: {price}€</p>
		<button
			onclick={() => {
				cart.push({ item: '🍌', total: +price })
				price = (Math.random() * 100).toFixed()
			}}
		>
			Add to cart
		</button>
	</div>

	<hr />

	<b>Total: {total}€</b>
</div>

<style>
	.container {
		text-align: left;
	}

	div {
		display: grid;
		justify-items: start;
		gap: var(--spacing-16);

		> * {
			margin: 0;
		}
	}

	hr {
		width: 100%;
		margin-top: var(--spacing-24);
	}
</style>
