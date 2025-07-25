<script lang="ts">
	type Props = {
		src: string
		title: string
	}

	let { src, title }: Props = $props()
</script>

<iframe {title} {src} loading="lazy"></iframe>
