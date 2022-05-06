<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Heading>About</Heading>

<main>
  <p>Hey! 👋</p>
  <p>
    I'm <b>Matija</b> from 🇭🇷 <b>Croatia</b> and I'm infinitely curious at how
    things work but I'm mostly passionate about ☕
    <b>JavaScript and</b>
    🎨
    <b>UI/UX design</b>.
  </p>
  <p>
    I'm a huge advocate for using the web platform and I love working with <b
      >React</b
    >
    and <b>Svelte</b> using
    <b>TypeScript</b>
    and writing <b>plain CSS</b> because I love it.
  </p>
  <p>
    I created <b>Joy of Code</b> because I think a lot of tutorials don't help you
    learn how to solve problems but just read the documentation to you and go from
    point A to point B.
  </p>
  <p>
    <strong>I want to show you steps between A and B</strong> by sharing what I learn
    and how I think about solving problems.
  </p>
  <p>
    I'm trying to create something I wish existed — it's more like having a
    friend help you out instead of someone talking over your head.
  </p>
</main>

<style>
  main {
    max-width: 60ch;
    margin-inline: auto;
    display: grid;
    row-gap: var(--spacing-32);
    margin-bottom: var(--spacing-64);
  }
</style>
