---
title: Never Search For Svelte Components Again
description: Hover over elements and open Svelte components in your editor using the Svelte inspector.
slug: svelte-inspector
published: '2022-9-9'
category: svelte
---

{% youtube id="OuDSEvplXqY" title="Svelte Inspector" %}

## Table of Contents

## The Svelte Inspector

How many times have you bumbled around your editor looking for the component you want to change.

Wouldn't it be great if you could inspect and open the component inside your editor from your site?

{% video src="inspector.mp4" %}

You can thanks to the experimental [Svelte inspector](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector) option by enabling it inside your config!

## Enable For Svelte

For regular Svelte projects using Vite you can enable it inside `vite.config.js`.

```js:vite.config.js showLineNumbers
export default defineConfig({
  plugins: [
    svelte({
      experimental: {
        inspector: true,
      }
    })
  ]
})
```

## Enable For SvelteKit

If you're using SvelteKit you can enable it inside `svelte.config.js`.

```js:svelte.config.js showLineNumbers
const config = {
  // ...
  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },
}
```

## Configuration

Using the default options the inspector becomes available using the <kbd>Meta</kbd> + <kbd>Shift</kbd> shortcut but you can change the options.

```js:svelte.config.js showLineNumbers
 const config = {
  // ...
  vitePlugin: {
    experimental: {
      inspector: {
        // change shortcut
        toggleKeyCombo: 'meta-shift',
        // hold and release key to toggle inspector mode
        holdMode: true,
        // show or hide the inspector option
        showToggleButton: 'always',
        // inspector position
        toggleButtonPos: 'top-right',
      },
    },
}
```

Unfortunately there's no code completion for the options since it's experimental, so you're going to have to look at the available options in the documentation.

Thank you for reading! 🏄️
