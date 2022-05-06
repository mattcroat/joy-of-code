<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ props }) => {
    return {
      props,
      cache: { maxage: 60 * 60 },
    }
  }
</script>

<script lang="ts">
  import { page } from '$app/stores'

  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import { categories } from '$root/lib/config'
  import type { PostType } from '$root/types'

  export let posts: PostType[]
  const category = $page.params.category
</script>

<svelte:head>
  <title>{categories[category]}</title>
  <meta content="{categories[category]} category." name="description" />
</svelte:head>

<Heading>{categories[category]}</Heading>

<Posts {posts}>
  <div class="container" slot="title">
    <div>
      <span class="tag">{category}</span>
    </div>
    <div>
      <span class="results">{posts.length}</span> results
    </div>
  </div>
</Posts>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .tag {
    padding: var(--spacing-16);
    font-weight: 700;
    background-color: var(--clr-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .results {
    font-weight: 700;
  }
</style>
