<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ props }) => {
    return {
      props,
      cache: {
        maxage: props.maxage,
      },
    }
  }
</script>

<script lang="ts">
  import { browser, dev } from '$app/env'

  import Card from '$root/components/ui/card.svelte'
  import {
    fileUrl,
    postImage,
    siteName,
    siteUrl,
    twitterHandle,
  } from '$root/lib/config'
  import { updateViews } from '$root/lib/supabase'
  import type { FrontMatterType } from '$root/types'
  import Overlay from '$root/components/ui/overlay.svelte'
  import Clipboard from '$root/components/ui/clipboard.svelte'

  export let content: string
  export let frontmatter: FrontMatterType

  let editUrl = `${fileUrl}/${frontmatter.slug}/${frontmatter.slug}.md`
  let image = `${postImage}${encodeURIComponent(frontmatter.title)}.png`

  if (!dev && browser) {
    updateViews(frontmatter.slug)
  }
</script>

<svelte:head>
  <title>{frontmatter.title}</title>

  <meta content={frontmatter.description} name="description" />

  <meta content={frontmatter.title} property="og:title" />
  <meta content={image} property="og:image" />
  <meta content={siteUrl} property="og:url" />
  <meta content={frontmatter.description} property="og:description" />
  <meta content={siteName} property="og:site_name" />

  <meta content={twitterHandle} name="twitter:creator" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content={frontmatter.title} name="twitter:title" />
  <meta content={frontmatter.description} name="twitter:description" />
  <meta content={image} name="twitter:image" />
</svelte:head>

<Clipboard />

<main>
  <Overlay />

  <div class="prose">
    {@html content}
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
