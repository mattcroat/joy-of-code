<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
  import Newsletter from '$root/components/ui/newsletter.svelte'
</script>

<svelte:head>
  <title>Newsletter</title>
  <meta
    content="Subscribe for updates and tasty web development treats."
    name="description"
  />
</svelte:head>

<Heading>Newsletter</Heading>

<div class="newsletter">
  <h3>Subscribe for updates and tasty web development treats</h3>
  <Newsletter />
</div>

<style>
  .newsletter {
    display: grid;
    justify-items: center;
  }

  h3 {
    margin-bottom: var(--spacing-32);
    text-transform: capitalize;
  }

  @media (min-width: 860px) {
    .newsletter {
      display: grid;
      justify-items: center;
      margin-bottom: var(--spacing-128);
    }
  }
</style>
