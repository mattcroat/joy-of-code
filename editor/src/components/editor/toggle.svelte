<script lang="ts">
  import { getContext } from 'svelte'
  import { ChevronDoubleRightIcon } from '@rgossiaux/svelte-heroicons/outline'
  import type { EditorPostType } from '$root/types'

  const post: EditorPostType = getContext('post')

  function togglePreview() {
    $post.preview = !$post.preview
  }
</script>

<button class="toggle" on:click={togglePreview}>
  <div class:show={$post.preview} class:hide={!$post.preview}>
    <ChevronDoubleRightIcon width="28" height="28" />
  </div>
</button>

<style>
  .toggle {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .toggle :global(svg) {
    display: block;
    color: hsl(0 0% 40%);
    transition: color 0.3s;
  }

  .toggle :global(svg:hover) {
    color: hsl(0 0% 98%);
  }

  .show {
    animation: rotate-inverse 0.2s linear reverse;
  }

  .hide {
    animation: rotate 0.2s linear;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    to {
      transform: rotate(-180deg);
    }
  }

  @keyframes rotate-inverse {
    to {
      transform: rotate(-180deg);
    }
  }
</style>
