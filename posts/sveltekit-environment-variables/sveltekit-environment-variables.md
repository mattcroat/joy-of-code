---
title: Using Secret Environment Variables With SvelteKit
description: Learn how to keep your secret environment variables safe for your API tokens and other secrets.
slug: sveltekit-environment-variables
published: 2022-3-24
category: 'sveltekit'
---

# Using Secret Environment Variables With SvelteKit

{% embed src="https://www.youtube.com/embed/_qgRBAua7cE" title="Using Secret Environment Variables With SvelteKit" %}

## Table of Contents

## What Are Environment Variables?

Environment variables are variables in your system that describe your environment.

For example on Unix-like operating systems like Mac and Linux if you type `echo $HOME` in the terminal you get the path to home. The same is true if you type `echo $PATH` to list the paths to executable files.

This is useful because you don't have to know the entire path to an executable but just type its name.

We can set environment variables and they're useful from knowing if you're in development or production or storing API tokens safely.

In development you store environment variables inside a `.env` file that should be added to `.gitignore`.

To help your future self and others it's a great idea to create a `.env.example` file with placeholder values that's safe to push so you know what keys you need.

## Using Vite to Expose Environment Variables Client-side

SvelteKit uses [Vite](https://vitejs.dev/) so anything regarding environment variables should be consulted reading the [Vite documentation](https://vitejs.dev/guide/env-and-mode.html).

Vite exposes environment variables on the special `import.meta.env` object.

This is great for public values like your tracking ID for Google Analytics that you need on the client but if you have sensitive information like your GitHub token in the wrong hands someone could wreak havoc.

Here's an example.

```shell:.env
VITE_UNSECURE_SECRET=secret
```

```html:index.svelte {2} showLineNumbers
<script lang="ts">
  const secret = import.meta.env.VITE_UNSECURE_SECRET
</script>
```

Never expose your secrets like this in your components.

Only use `import.meta.env` in endpoints or other server-side code because you could leak your secret to the client.

## Safely Loading Environment Variables

In the [SvelteKit FAQ](https://kit.svelte.dev/faq#env-vars) they suggest to load environment variables using [dotenv](https://github.com/motdotla/dotenv).

```shell:terminal
npm i dotenv
```

After you install `dotenv` you can load environment variables in your endpoints.

```shell:.env
SECURE_SECRET=secret
```

```html:index.svelte showLineNumbers
<script lang="ts">
  export let message
</script>

{message}
```

```ts:index.ts showLineNumbers
import type { RequestHandler } from '@sveltejs/kit'

// `dotenv` loads the environment variables
import 'dotenv/config'

export const get: RequestHandler = async () => {
  // it's also safe to use the Vite import here
  // const secret = import.meta.env.VITE_UNSECURE_SECRET

  // we can access the value using `process.env`
  const secret = process.env.SECURE_SECRET

  if (secret === 'secret') {
    return {
      status: 200,
      body: { message: 'Success! 🥳' },
    }
  }

  throw new Error(`You're a failure. 💩`)
}
```

Don't forget if you're hosting your site on services like [Vercel](https://vercel.com/) you have to set the secret environment variables in your dashboard.

## The Easiest Method to Load Environment Variables

Using [env-cmd](https://github.com/toddbluhm/env-cmd) you can load environment variables just by passing it to your scripts.

```shell:terminal
npm i env-cmd
```

```json:package.json {3,4,6} showLineNumbers
// ...
"scripts": {
  "dev": "env-cmd svelte-kit dev",
  "build": "env-cmd svelte-kit build",
  "package": "svelte-kit package",
  "preview": "env-cmd svelte-kit preview",
  "prepare": "svelte-kit sync"
}
// ...
```

```ts:index.ts showLineNumbers
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async () => {
  const secret = process.env.SECURE_SECRET

  if (secret === 'secret') {
    return {
      status: 200,
      body: { message: 'Success! 🥳' },
    }
  }

  throw new Error(`You're a failure. 💩`)
}
```

If you're trying it out keep in mind you have to restart the server when you make changes to the `.env` file.

## Conclusion

To summarize only use Vite to import environment variables you're comfortable being exposed on the client or use them only inside endpoints or other server-side code.

To be safe use a package such as `dotenv` or `env-cmd` to load the environment variables.

Thanks for reading! 🏄️
