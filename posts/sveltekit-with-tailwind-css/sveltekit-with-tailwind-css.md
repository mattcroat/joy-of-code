---
title: Set Up SvelteKit With Tailwind CSS
description: Learn how to set up Tailwind CSS and automatic class sorting with SvelteKit.
slug: sveltekit-with-tailwind-css
published: '2022-10-12'
category: sveltekit
---

{% youtube id="J_G_xP0chog" title="SvelteKit With Tailwind CSS" %}

## Table of Contents

## Using Svelte Add

The easiest way to set up Tailwind CSS inside of an existing SvelteKit project is with [svelte-add](https://github.com/svelte-add/svelte-add).

```shell:terminal
npx svelte-add tailwindcss
```

You're done!

Notice this creates a `app.postcss` file which is imported inside the root layout.

```html:src/routes/+layout.svelte showLineNumbers
<script>
	import '../app.postcss'
</script>

<slot />
```

## Automatic Class Sorting With Prettier

Make sure you have the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed and it's the default formatter in your VS Code settings.

```json:settings.json showLineNumbers
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

Skip this step if you have `prettier` in your project.

```shell:terminal
npm i -D prettier prettier-plugin-svelte
```

Install the Prettier plugin for Tailwind CSS.

```shell:terminal
npm i -D prettier-plugin-tailwindcss
```

You might need to restart your editor.

```html:routes/+page.svelte showLineNumbers
<!-- Before -->
<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
  ...
</button>

<!-- After -->
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
  ...
</button>
```

## Useful Tailwind CSS Tips

Here are some useful quality of life tips when using Tailwind:

- If you need a component library for Svelte you can use [Skeleton](https://www.skeleton.dev/) or [daisyUI](https://daisyui.com/) and [Flowbite](https://flowbite.com/) which are framework agnostic
- Use the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension to help you with autocomplete so you don't have to look for every value in the documentation
- Use [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) to find what you need at a glance
- Don't forget you can place your long class names inside a variable if you need to reuse them because [the author of Tailwind discourages extracting classes with `@apply`](https://twitter.com/adamwathan/status/1226511611592085504)
- Enable word wrap in your editor with <kbd>Alt</kbd> + <kbd>Z</kbd> to make it easier to work with long class names
- Another way to get class sorting in Tailwind is with the [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) extension if other methods don't work for you
