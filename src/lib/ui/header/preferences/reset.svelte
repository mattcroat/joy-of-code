<script lang="ts">
	import { preferences } from './preferences.svelte'
</script>

<div class="reset-preferences">
	<span>Use default settings</span>
	<button onclick={() => preferences.reset()}>Reset</button>
</div>

<style>
	button {
		padding: var(--spacing-8) var(--spacing-16);
		font-weight: 700;
		color: var(--clr-input-txt);
		background-color: var(--clr-primary);
		border-radius: var(--rounded-4);
		box-shadow: var(--shadow-sm);
	}
</style>
