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
  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import type { PostType } from '$root/types'

  export let posts: PostType[]
</script>

<svelte:head>
  <title>Series</title>
</svelte:head>

<Heading>Series</Heading>

<Posts {posts}>
  <div class="container" slot="title">
    <h3>Entries</h3>
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

  .results {
    font-weight: 700;
  }
</style>
