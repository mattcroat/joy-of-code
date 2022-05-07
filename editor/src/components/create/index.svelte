<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  import Toolbar from './toolbar.svelte'
  import Editor from './editor.svelte'
  import Preview from './preview.svelte'
  import Toggle from './toggle.svelte'
  import { frontmatter } from './frontmatter'

  const post = writable({
    slug: 'slug',
    title: 'Untitled',
    markdown: frontmatter,
    preview: true,
  })
  setContext('post', post)

  $: columns = $post.preview ? 'repeat(2, 50%)' : '1fr'
</script>

<div class="editor">
  <Toolbar />
  <main style="--columns: {columns}">
    <Editor />
    <Preview />
    <Toggle />
  </main>
</div>

<style>
  .editor {
    height: 100%;
    display: grid;
    grid-template-rows: 60px calc(100% - 60px);
    overflow: hidden;
  }

  main {
    position: relative;
    display: grid;
    grid-template-columns: var(--columns);
  }
</style>
