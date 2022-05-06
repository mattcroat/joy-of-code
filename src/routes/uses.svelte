<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
</script>

<svelte:head>
  <title>Uses</title>
  <meta
    content="List of things I use from my code editor to fonts and themes."
    name="description"
  />
</svelte:head>

<Heading>Uses</Heading>

<div class="categories">
  <div class="category">
    <p>Operating system</p>
    <a href="https://manjaro.org/" target="_blank">Linux Manjaro (GNOME)</a>
  </div>
  <div class="category">
    <p>Terminal</p>
    <div>
      <a href="https://ohmyz.sh/" target="_blank">Oh My ZSH (Z Shell)</a>
      <a href="https://starship.rs/" target="_blank">
        Starship (Cross-Shell Prompt)
      </a>
    </div>
  </div>
  <div class="category">
    <p>Code editor</p>
    <a href="https://code.visualstudio.com/" target="_blank">
      Visual Studio Code
    </a>
  </div>
  <div class="category">
    <p>Code editor theme</p>
    <a
      href="https://marketplace.visualstudio.com/items?itemName=Matia.night-howl"
      target="_blank"
    >
      Night Howl
    </a>
  </div>
  <div class="category">
    <p>Coding Font</p>
    <a href="https://www.monolisa.dev/" target="_blank">
      MonoLisa (Cascadia Code or Mononoki is a great alternative)
    </a>
  </div>
  <div class="category">
    <p>Free Coding Fonts I Love (alphabetical order)</p>
    <div>
      <a
        href="https://www.marksimonson.com/fonts/view/anonymous-pro"
        target="_blank"
      >
        Anonymous Pro
      </a>
      <a href="https://github.com/microsoft/cascadia-code" target="_blank">
        Cascadia Code
      </a>
      <a href="https://github.com/tonsky/FiraCode" target="_blank">Fira Code</a>
      <a href="https://fonts.google.com/specimen/IBM+Plex+Mono" target="_blank">
        IBM Plex Mono
      </a>
      <a href="https://madmalik.github.io/mononoki/" target="_blank">
        Mononoki
      </a>
      <a
        href="https://fonts.google.com/specimen/Source+Code+Pro"
        target="_blank"
      >
        Source Code Pro
      </a>
    </div>
  </div>
</div>

<style>
  .categories {
    display: grid;
    row-gap: var(--spacing-32);
  }

  .category p {
    max-width: 400px;
    font-size: var(--font-24);
    font-weight: 700;
    line-height: 32px;
    text-transform: capitalize;
    justify-self: end;
  }

  .category a {
    width: max-content;
    max-width: 300px;
    display: block;
    margin: var(--spacing-16) 0;
    font-weight: inherit;
  }

  @media (min-width: 680px) {
    .category {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-64);
      align-items: baseline;
    }

    .category p {
      text-align: right;
    }
  }

  @media (min-width: 860px) {
    .category a {
      max-width: 400px;
    }
  }
</style>
