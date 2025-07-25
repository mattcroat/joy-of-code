<script lang="ts">
	type Props = {
		alt: string
		src: string
		slug: string
	}

	let { src, alt, slug }: Props = $props()

	const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`
</script>

<img src="{images}/{slug}/images/{src}" {alt} loading="lazy" />
