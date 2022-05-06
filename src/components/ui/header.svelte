<script lang="ts">
  import Menu from '$root/components/menu/index.svelte'
  import Preferences from '$root/components/preferences/index.svelte'
  import { siteName } from '$root/lib/config'
</script>

<header>
  <div class="logo">
    <a href="/">{siteName}</a>
  </div>

  <nav>
    <Preferences />
    <Menu />
  </nav>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    align-self: start;
    margin-top: var(--spacing-32);
  }

  .logo {
    grid-column: 2 / 3;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
  }

  .logo a::before {
    content: none;
  }

  nav {
    display: flex;
    gap: var(--spacing-16);
    margin-left: auto;
  }

  nav :global(svg) {
    cursor: pointer;
  }
</style>
