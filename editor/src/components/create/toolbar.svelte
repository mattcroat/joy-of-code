<script lang="ts">
  import { getContext } from 'svelte'
  import { goto } from '$app/navigation'
  import { ArrowLeftIcon, SaveIcon } from '@rgossiaux/svelte-heroicons/outline'

  import { enhance } from '$root/lib/form'
  import { failure, success } from '$root/lib/toast'
  import type { EditorPostType } from '$root/types'

  const post: EditorPostType = getContext('post')

  function match(regexp: RegExp, content: string) {
    return regexp.test(content) ? content.match(regexp)[1].trim() : ''
  }

  $: title = match(/title: (.*)/, $post.markdown)
  $: slug = match(/slug: (.*)/, $post.markdown)
</script>

<div class="toolbar">
  <a class="back" href="/">
    <ArrowLeftIcon width="24" height="24" />
  </a>
  <span class="title">{title}</span>
  <form
    method="post"
    use:enhance={{
      pending: async () => {
        success(`💾 Saved ${title}.md`)
      },
      error: async ({ response }) => {
        const { error } = await response.json()
        failure(error)
      },
      result: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        goto('/')
      },
    }}
  >
    <input type="hidden" name="slug" value={slug} />
    <input type="hidden" name="markdown" value={$post.markdown} />
    <button class="save" type="submit">
      <SaveIcon width="24" height="24" />
      <span>Save</span>
    </button>
  </form>
</div>

<style>
  .toolbar {
    display: flex;
    align-items: center;
    gap: var(--spacing-16);
    background-color: hsl(0 0% 12%);
    border-bottom: 1px solid hsl(0 0% 20%);
  }

  .back {
    margin-left: var(--spacing-24);
    display: flex;
  }

  .title {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-24);
    font-size: var(--font-24);
    font-weight: 700;
    border-right: 1px solid hsl(0 0% 20%);
  }

  .save {
    display: flex;
    gap: var(--spacing-4);
    align-items: center;
    font-size: var(--font-16);
  }

  .save span {
    padding-top: 0.2rem;
  }

  a,
  button {
    font-weight: 400;
    color: hsl(0 0% 60%);
  }

  button:hover,
  a:hover {
    color: tomato;
    text-decoration: none;
  }
</style>
