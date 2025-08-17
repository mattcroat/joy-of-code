<script lang="ts">
	let { children } = $props()
</script>

<div class="accordion">
	{@render children?.()}
</div>
