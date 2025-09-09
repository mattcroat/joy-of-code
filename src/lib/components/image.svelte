<script lang="ts">
	import { page } from '$app/state'

	type Props = {
		alt: string
		src: string
		slug: string
	}

	let { src, alt }: Props = $props()

	const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`
	const slug = page.params.slug
</script>

<img src="{images}/{slug}/images/{src}" {alt} loading="lazy" />
