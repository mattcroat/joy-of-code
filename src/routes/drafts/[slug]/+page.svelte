<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/site/config'

	import Card from '../../[slug]/card.svelte'
	import Clipboard from '../../[slug]/clipboard.svelte'
	import Overlay from '../../[slug]/overlay.svelte'
	import TableOfContents from '../../[slug]/toc.svelte'

	export let data

	const { content, frontmatter } = data.post

	let editUrl = `${config.fileUrl}/${frontmatter.slug}/${frontmatter.slug}.md`
</script>

<svelte:head>
	<title>{frontmatter.title}</title>
</svelte:head>

<Clipboard />

<main>
	<Overlay />
	<TableOfContents />

	<article class="prose">
		<header>
			<h1 class="title">{frontmatter.title}</h1>
			<p class="published">Published {formatDate(frontmatter.published)}</p>
		</header>

		{@html content}
	</article>

	<div class="cards">
		<Card preset="support" />
		<Card preset="newsletter" />
		<Card preset="edit" {editUrl} />
	</div>
</main>

<style>
	.cards {
		display: grid;
		row-gap: var(--spacing-32);
		max-width: var(--post-txt-length);
		margin: var(--spacing-64) 0;
		margin-inline: auto;
	}

	.title {
		max-width: 600px;
		margin-inline: auto;
	}

	.published {
		margin-top: var(--spacing-24);
	}
</style>
