<script lang="ts">
  import Editor from '$root/components/editor/index.svelte'

  export let slug = ''
  export let title = ''
  export let markdown = ''
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Editor {slug} {title} {markdown} />
