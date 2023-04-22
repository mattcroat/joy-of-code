<h1>
	<slot />
</h1>

<style>
	h1 {
		margin: var(--spacing-64) 0;
		font-size: clamp(var(--font-48), 8vw, var(--font-96));
		line-height: clamp(48px, 10vw, 112px);
		color: var(--clr-primary);
		text-align: center;
	}

	@media (min-width: 860px) {
		h1 {
			margin: var(--spacing-128) 0;
		}
	}
</style>
