<script lang="ts">
	let { ...rest } = $props()
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	stroke-width="2"
	stroke="currentColor"
	fill="none"
	{...rest}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
	/>
</svg>
