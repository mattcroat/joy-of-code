---
title: Use Future CSS In Svelte Today
description: Learn how to use future CSS in Svelte today with PostCSS.
slug: using-future-css-in-svelte
published: '2022-9-2'
category: svelte
---

{% youtube id="eqwtoaP-0pk" title="Use Future CSS in Svelte" %}

## Table of Contents

## Use Future CSS Today

With so many great CSS features like [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) coming to browsers the excitement around CSS has never been greater.

Here are some of the CSS features I'm excited about:

- [Nesting rules](https://preset-env.cssdb.org/features/#nesting-rules)
- [Cascade layers](https://preset-env.cssdb.org/features/#cascade-layers)
- [Custom media queries](https://preset-env.cssdb.org/features/#custom-media-queries)
- [Media query ranges](https://preset-env.cssdb.org/features/#media-query-ranges)
- [`:has()` and `:is()` pseudo class](https://preset-env.cssdb.org/features/#has-pseudo-class)
- [Trigonometric functions](https://preset-env.cssdb.org/features/#trigonometric-functions)

Some of these features might be already supported by some browsers but what if you wanted to use those features today?

In that case you can use PostCSS that describes itself as “A tool for transforming CSS with JavaScript”.

## Set Up PostCSS

[PostCSS](https://postcss.org/) is to CSS what [Babel](https://babeljs.io/) is to JavaScript and it lets you use future CSS today by converting modern CSS to something most browsers can understand using polyfills.

> 🐿️ A [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) is a piece of code used to provide functionality on older browsers that don't natively support it.

To start using modern CSS today it's simple as adding the [postcss-preset-env](https://preset-env.cssdb.org/) plugin for PostCSS in your Svelte project and enabling the options you want.

This works for any Svelte project that uses [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) which has built-in support for PostCSS but I'm going to use a skeleton [SvelteKit](https://kit.svelte.dev/) project.

The best part about this approach is when these features are supported in every browser you can just remove PostCSS or keep it for future CSS and you don't have to use [SASS](https://sass-lang.com/) just for nested styles.

To get started install the `postcss-preset-env` and `postcss-load-config` plugin to load the PostCSS config.

```shell:terminal
npm i -D postcss-preset-env postcss-load-config @types/postcss-preset-env
```

Create a `postcss.config.cjs` file at the root of your project.

```js:postcss.config.cjs showLineNumbers
const postcssPresetEnv = require('postcss-preset-env')

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true
      }
    })
  ]
}

module.exports = config
```

Here we specified the CSS features using the `stage` option and enabled the nesting rule and you can [learn more from the documentation](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env).

The last step is to enable loading the config in `svelte.config.js`.

```js:svelte.config.js {6} showLineNumbers
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter()
	}
}

export default config
```

To process the CSS include the `lang="postcss"` attribute inside the `<style>` tag.

```html:+page.svelte
<style lang="postcss">
  /* ... */
</style>
```

That's it! 🎉

Hope you take advantage of future CSS today and you can find the example on [GitHub](https://github.com/JoysOfCode/svelte-future-css) or play with it on [StackBlitz](https://stackblitz.com/github/joysofcode/svelte-future-css).

Thank you for reading! 🏄️
