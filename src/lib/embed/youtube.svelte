<script lang="ts">
	import { onMount } from 'svelte'
	import 'lite-youtube-embed/src/lite-yt-embed.css'

	onMount(async () => {
		await import('lite-youtube-embed')
	})
</script>
