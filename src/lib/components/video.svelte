<script lang="ts">
	type Props = {
		src: string
		slug: string
	}

	let { src, slug }: Props = $props()

	const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video controls>
	<source src="{images}/{slug}/images/{src}" type="video/mp4" />
</video>
