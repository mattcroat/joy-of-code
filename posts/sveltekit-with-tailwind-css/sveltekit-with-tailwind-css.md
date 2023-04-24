---
title: SvelteKit With Tailwind CSS
description: Learn how to set up Tailwind CSS and automatic class sorting with SvelteKit.
slug: sveltekit-with-tailwind-css
published: '2022-10-12'
category: sveltekit
---

{% youtube id="J_G_xP0chog" title="SvelteKit With Tailwind CSS" %}

## Table of Contents

## Set up Tailwind CSS

You can create a new SvelteKit project or add Tailwind to an existing project.

> 🧪 You can find the example repository on [GitHub](https://github.com/joysofcode/sveltekit-tailwind).

Create new SvelteKit project.

```shell:terminal
npm init svelte
```

> 🐿️ You can skip the next part and use `npx svelte-add tailwindcss`

Install the dependencies required by Tailwind.

```shell:terminal
npm i -D tailwindcss postcss autoprefixer
```

Create the Tailwind CSS config.

```shell:terminal
npx tailwindcss init tailwind.config.cjs -p
```

Give Tailwind the path to your template files.

```js:tailwind.config.cjs showLineNumbers
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

Add the Tailwind directives to your CSS.

```css:app.css showLineNumbers
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the CSS file.

```html:routes/+layout.svelte showLineNumbers
<script>
  import '../app.css'
</script>

<slot />
```

You're done!

```html:routes/+page.svelte showLineNumbers
<h1 class="grid h-screen place-content-center text-8xl">
  Heading
</h1>
```

## Automatic Class Sorting With Prettier

Make sure you have the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed and it's the default formatter in your VS Code settings.

```json:settings.json showLineNumbers
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

You're going to need the `prettier` package which is one of the options when you create a SvelteKit project.

```shell:terminal
✔ Add Prettier for code formatting? … No / [Yes]
```

Skip this step if you have Prettier.

```shell:terminal
npm i -D prettier
```

Install the Prettier plugin for Tailwind CSS.

```shell:terminal
npm i -D prettier-plugin-tailwindcss
```

SvelteKit uses `prettier-plugin-svelte` which conflicts with the Tailwind CSS plugin and you have to remove it but `prettier-plugin-tailwindcss` includes it for you so everything should work as before.

```shell:terminal
npm uninstall prettier-plugin-svelte
```

Remove plugins from your Prettier config.

```diff:.prettierrc showLineNumbers
{
  "semi": false,
  "useTabs": true,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 60,
- "plugins": ["prettier-plugin-svelte"],
  "pluginSearchDirs": ["."],
  "overrides": [
    {
      "files": "*.svelte",
      "options": { "parser": "svelte" }
    }
  ]
}
```

You also don't have to change the formatter for your Svelte files.

```json:settings.json showLineNumbers
"[svelte]": {
  "editor.defaultFormatter": "svelte.svelte-vscode"
}
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

## Conclusion

Despite the drama around it Tailwind CSS is a great way for moving quick without distractions and feels great because of it but it doesn't compensate for not understanding CSS because a Tailwind class is just a line of regular CSS and it's not a UI component framework.

If you decide at a later point in your project that you don't want to use Tailwind anymore that's perfectly fine because it's a great prototyping tool and you can replace it with regular CSS using [Open Props](https://open-props.style/) if you want.

Thank you for reading! 🏄️
