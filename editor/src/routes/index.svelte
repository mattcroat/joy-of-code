<script lang="ts">
  import {
    PlusCircleIcon,
    RefreshIcon,
    TrashIcon,
  } from '@rgossiaux/svelte-heroicons/outline'

  import { enhance } from '$root/lib/form'
  import { failure, success } from '$root/lib/toast'
  import type { PostItemType } from '$root/types'

  export let posts: PostItemType[] = []
</script>

<svelte:head>
  <title>Editor</title>
</svelte:head>

<main>
  <section>
    <h2>Actions</h2>

    <div class="actions">
      <div class="create-post">
        <a href="/create">Create post</a>
        <PlusCircleIcon width="24" height="24" />
      </div>

      <div class="update-posts">
        <form
          method="post"
          use:enhance={{
            pending: async () => success(`👻 Updating posts.json`),
            error: async ({ response }) => {
              const { error } = await response.json()
              failure(error)
            },
          }}
        >
          <button type="submit">Update posts.json</button>
        </form>
        <RefreshIcon width="24" height="24" />
      </div>
    </div>
  </section>

  <section>
    <h2>Posts</h2>
    <div class="posts">
      {#each posts as post}
        <article class="post">
          <a href="/edit/{post.slug}">{post.title}</a>
          <form
            action="?_method=delete"
            method="post"
            use:enhance={{
              pending: async () => success(`👻 ${post.slug}.md removed`),
              error: async ({ response }) => {
                const { error } = await response.json()
                failure(error)
              },
              confirmation: () => {
                const response = confirm('Are you sure?')
                return response
              },
            }}
          >
            <input type="hidden" name="slug" value={post.slug} />
            <button type="submit">
              <TrashIcon width="24" height="24" />
            </button>
          </form>
        </article>
      {/each}
    </div>
  </section>
</main>

<style>
  main {
    display: grid;
    gap: var(--spacing-64);
    padding: var(--spacing-24) var(--spacing-32);
  }

  section {
    display: grid;
    gap: var(--spacing-8);
  }

  .actions {
    display: flex;
    gap: var(--spacing-24);
  }

  .actions .create-post,
  .actions .update-posts {
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-16);
    padding: var(--spacing-24);
    background-color: hsl(220 20% 16%);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .post {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }

  .post:nth-child(odd) {
    background: hsl(220 20% 16%);
  }
</style>
