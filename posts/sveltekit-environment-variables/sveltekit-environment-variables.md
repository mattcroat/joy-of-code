---
title: Using Secret Environment Variables With SvelteKit
description: Learn how to keep your secret environment variables safe for your API tokens and other secrets.
slug: sveltekit-environment-variables
published: 2022-3-24
category: 'sveltekit'
---

# Using Secret Environment Variables With SvelteKit

## Table of Contents

## What Are Environment Variables?

Environment variables are variables in your system that describe your environment.

For example on Unix-like operating systems like Mac and Linux if you type `echo $HOME` in the terminal you get the path to home. The same is true if you type `echo $PATH` to list the paths to executable files.

This is useful because you don't have to know the entire path to an executable but just type its name.

We can set environment variables and they're useful from knowing if you're in development or production or storing API tokens safely.

In development you store environment variables inside a `.env` file that should be added to `.gitignore`.

To help your future self and others it's a great idea to create a `.env.example` file with placeholder values that's safe to push so you know what keys you need.


## Using Environment Variables In SvelteKit

SvelteKit exposes four different [modules](https://kit.svelte.dev/docs/modules) for handling environment variables:
- [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules)
- [`$env/dynamic/public`](https://kit.svelte.dev/docs/modules)
- [`$env/static/private`](https://kit.svelte.dev/docs/modules)
- [`$env/static/public`](https://kit.svelte.dev/docs/modules)

You can load environment variables however you want like using `import.meta.env` from [Vite](https://vitejs.dev/guide/env-and-mode.html#env-variables) or [dotenv](https://github.com/motdotla/dotenv) but it's easier and more secure if you use the built-in modules SvelteKit provides.

Another great benefit of SvelteKit managing everything for you is that it won't let you expose sensitive environment variables on the client and throw an error since it knows about the imports and you get great TypeScript support.

That being said these four options might look confusing but are easy to understand once you understand their purpose.

## Static For Variables That Don't Change

**This is what you want most of the time.**

If you have an `.env` file or store your environment variables somewhere else the next steps are the same.

```text:.env showLineNumbers
# Private
SECRET_API_KEY=secret

# Public
PUBLIC_API_KEY=public
```

Use `$env/static/private` if you want to access environment variables loaded from your `.env` file but only inside `.server` files.

```ts:+page.ts showLineNumbers
import { SECRET_API_KEY } from '$env/static/private'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  console.log(SECRET_API_KEY) // secret
}
```

Use `$env/static/public` if you want to access environment variables prefixed with `PUBLIC_` loaded from your `.env` file.


```ts:+page.server.ts showLineNumbers
import { PUBLIC_API_KEY } from '$env/static/public'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  console.log(PUBLIC_API_KEY) // public
}
```

## Dynamic For Variables That Change

Sometimes you have environment variables that change and you have to send them from the server to the client. **Use them only when you need to.**

Use `$env/dynamic/private` to get access to environment variables equivalent to `process.env`.

```ts:+page.ts showLineNumbers
import { env } from '$env/dynamic/private'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  console.log(env.SECRET_API_KEY) // secret
}
```

Use `$env/dynamic/public` to get access to environment variables prefixed with `_PUBLIC`.

```ts:+page.server.ts showLineNumbers
import { env } from '$env/dynamic/public'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  console.log(env.PUBLIC_API_KEY) // public
}
```

## Keep Your Own Secrets

You can create a server-only module by adding `.server` to a filename or placing the file inside `$lib/server` to store any other secrets.

```ts:lib/server/secrets.ts showLineNumbers
export const secret = '🍜'
```

```ts:+page.server.ts showLineNumbers
import { secret } from '$lib/server/secrets'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  console.log(secret) // 🍜
}
```

Thank you for reading! 🏄️
