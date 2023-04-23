<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>{$page.status}: {$page.error.message}</h1>

<style>
	h1 {
		margin-top: var(--spacing-64);
		font-family: var(--font-sans);
		font-size: var(--font-32);
		text-align: center;
		text-transform: none;
	}
</style>
