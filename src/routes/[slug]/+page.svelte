<script lang="ts">
	import { browser, dev } from '$app/environment'

	import Card from '$root/components/ui/card.svelte'
	import {
		fileUrl,
		postImage,
		siteName,
		siteUrl,
		twitterHandle,
	} from '$root/lib/config'
	import { updateViews } from '$root/lib/supabase'
	import Overlay from '$root/components/ui/overlay.svelte'
	import Clipboard from '$root/components/ui/clipboard.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	let editUrl = `${fileUrl}/${data.frontmatter.slug}/${data.frontmatter.slug}.md`
	let image = `${postImage}${encodeURIComponent(data.frontmatter.title)}.png`

	if (!dev && browser) {
		updateViews(data.frontmatter.slug)
	}
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>

	<meta content={data.frontmatter.description} name="description" />

	<meta content={data.frontmatter.title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={data.frontmatter.description} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<meta content={twitterHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.frontmatter.title} name="twitter:title" />
	<meta content={data.frontmatter.description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<Clipboard />

<main>
	<Overlay />

	<div class="prose">
		{@html data.content}
	</div>

	<div class="cards">
		<Card preset="edit" {editUrl} />
		<Card preset="newsletter" />
	</div>
</main>

<style>
	.cards {
		display: grid;
		row-gap: var(--spacing-32);
		max-width: var(--post-txt-length);
		margin: var(--spacing-32) 0;
		margin-inline: auto;
	}
</style>
