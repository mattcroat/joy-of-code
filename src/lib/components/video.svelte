<script lang="ts">
	import { page } from '$app/state'

	type Props = {
		src: string
		slug: string
	}

	let { src }: Props = $props()

	const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`
	const slug = page.params.slug
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video controls>
	<source src="{images}/{slug}/images/{src}" type="video/mp4" />
</video>
