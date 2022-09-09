---
title: Learn How To Use The Svelte Inspector
description: Learn how to inspect and open Svelte components in your editor.
slug: svelte-inspector
published: 2022-9-9
category: svelte
series: false
draft: true
---

# Learn How To Use The Svelte Inspector


How many times have you bumbled around your editor looking for the component you want to change — wouldn't it be great if you could point at the area of your site and open the component inside your editor instead?

{% video src="inspector.mp4" %}

Thanks to the experimental [Svelte inspector]([https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector)) option you can enable in your config you can!

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

You unfortunately won't get code completion for the options since it's experimental, so you're going to have to look at the available options in the documentation.

Thank you for reading! 🏄️