<script context="module" lang="ts">
  import type { ErrorLoad } from '@sveltejs/kit'

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    }
  }
</script>

<script lang="ts">
  export let title: string
</script>

<div class="error">
  <h1>{title}</h1>
</div>

<style>
  .error {
    height: 100%;
    display: grid;
    place-content: center;
  }

  .error h1 {
    max-width: 800px;
    text-align: center;
    word-wrap: break-word;
  }
</style>
