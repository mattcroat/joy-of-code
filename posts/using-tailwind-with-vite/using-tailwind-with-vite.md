---
title: Using Tailwind With Vite
description: Learn how to set up Vite and Tailwind.
slug: using-tailwind-with-vite
published: '2021-10-3'
category: css
---

## Table of Contents

## Initialize the Project

Initialize the **Vite** project.

```shell:terminal
npm init vite@latest
```

Install **dependencies**.

```shell:terminal
npm i
```

## Install Tailwind

**Vite** has [PostCSS](https://postcss.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer) built-in, so there's no need to install it.

```shell:terminal
npm i -D tailwindcss@latest
```

## Initialize the Tailwind Config

Depending on your project and folder structure be sure to include what files to **purge** to [optimize for production](https://tailwindcss.com/docs/optimizing-for-production).

```shell:terminal
npx tailwindcss init -p
```

I like to enable [JIT](https://tailwindcss.com/docs/just-in-time-mode) (Just-in-Time Mode) inside the **Tailwind config** that enables lightning fast build times and having every variant enabled out of the box. If you want to learn more about it watch [Just-In-Time: The Next Generation of Tailwind CSS](https://www.youtube.com/watch?v=3O_3X7InOw8).

```js:tailwind.config.js showLineNumbers
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## Add `@tailwind` Directives

Add this to your styles.

```css:tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Import Styles

Import your styles.

```js:main.js
import './tailwind.css'
```

## Extensions

If you're using [Visual Studio Code](https://code.visualstudio.com/) I highly recommend to get these extensions, or look if they exist for your editor.

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) adds autocomplete, syntax highlighting, and linting
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) enforces consistent ordering of classes and sorts them for you

## Conclusion

Setting up **Tailwind** with **Vite** is simple. Hope you found it useful and I wish you good luck in your project.

Thanks for reading! 🏄‍♀️
