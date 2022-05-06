<script lang="ts">
  import { EyeIcon } from '@rgossiaux/svelte-heroicons/outline'

  import Transition from '$root/components/transition/index.svelte'
  import { views } from '$root/stores/views'
  import type { PostType } from '$root/types'

  export let posts: PostType[]
</script>

<section>
  <slot name="title" />

  <div class="cards">
    {#each posts as post, index}
      <Transition transition={{ type: 'stagger', duration: index, delay: 300 }}>
        <a href="/{post.slug}">
          <article class="card">
            <span class="views">
              <EyeIcon width="24" height="24" aria-hidden="true" />
              {#if $views.length > 0}
                <span>
                  {$views
                    .find((data) => data.slug === post.slug)
                    ?.views.toLocaleString() ?? 0}
                </span>
              {/if}
            </span>
            <div class="details">
              <span class="title">{post.title}</span>
              <p class="description">{post.description}</p>
            </div>
          </article>
        </a>
      </Transition>
    {/each}
  </div>

  <slot name="see-more" />
</section>

<style>
  section {
    margin-top: var(--spacing-64);
  }

  .cards {
    display: grid;
    gap: var(--spacing-24);
    grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
    margin-top: var(--spacing-32);
  }

  .cards a {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .cards a::before {
    content: none;
  }

  .card {
    height: 400px;
    display: grid;
    grid-template-rows: min-content;
    padding: var(--spacing-16);
    background-image: var(--clr-card-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s ease-in-out, box-shadow 0.3s ease,
      outline 0.1s ease;

    /*
      I assume this prevents the card from flickering on hover
      by triggering hardware-accelerated rendering
    */
    transform: translateZ(0);
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-md);
    outline: 4px solid var(--clr-primary);
  }

  .card .views {
    display: flex;
    gap: var(--spacing-4);
    font-weight: 500;
    color: var(--clr-card-txt);
  }

  .card .details {
    align-self: end;
  }

  .card .title {
    font-family: var(--font-serif);
    font-size: var(--font-32);
    font-weight: 700;
    line-height: 48px;
  }

  html[data-font='dyslexic'] .card .title {
    font-family: var(--font-dyslexic);
    font-size: var(--font-24);
    line-height: 32px;
  }

  .card .description {
    margin-top: var(--spacing-8);
    color: var(--clr-card-txt);
  }

  :global([slot='see-more']) {
    width: max-content;
    display: flex;
    gap: var(--spacing-16);
    margin-top: var(--spacing-32);
  }
</style>
