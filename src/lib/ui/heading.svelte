<script lang="ts">
	let props = $props()
</script>

<h1>
	{@render props.children?.()}
</h1>

<style>
	h1 {
		margin: var(--spacing-64) 0;
		font-size: clamp(var(--font-48), 8vw, var(--font-96));
		line-height: clamp(48px, 10vw, 112px);
		color: var(--clr-primary);
		text-align: center;

		@media (width >= 860px) {
			margin: var(--spacing-128) 0;
		}
	}
</style>
