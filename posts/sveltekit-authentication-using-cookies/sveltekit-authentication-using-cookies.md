---
title: SvelteKit Authentication Using Cookies
description: Learn SvelteKit authentication using cookies.
slug: sveltekit-authentication-using-cookies
published: 2022-5-10
category: sveltekit
series: false
draft: true
---

# SvelteKit Authentication Using Cookies

## Table of Contents

## Setting Up The Database

In this post you're going to learn how to authenticate users securely using cookies and using protected routes.

You can find the [project files on GitHub](https://github.com/joysofcode/sveltekit-authentication-using-cookies).

I'm using a regular SvelteKit skeleton project with TypeScript but if you want to follow along create a new SvelteKit project with `npm init svelte auth` or pick SvelteKit from one of the fullstack options on [StackBlitz](https://stackblitz.com/) (it's even faster than your local development environment since it uses Node.js in the browser 🤯).

Start by creating a SQLite database using [Prisma](https://www.prisma.io/) — it's just a file on your system, so you don't have to think about it.

```shell:terminal
npx prisma init --datasource-provider sqlite
```

This is going to create a `prisma` folder at the root and a `schema.prisma` file alongside our `dev.db` SQLite database and update the `.env` file.

The Prisma schema is where you write the database code using JavaScript that generates the client and database for us.

For the database we're going to create a `User` table.

```ts:schema.prisma showLineNumbers
// this was set up for us

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// turns into SQL and creates the `User` table

model User {
  id           String   @id @default(uuid())
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  username     String   @unique
  passwordHash String
}
```

The table `User` has a unique `id`, `username` and `passwordHash` field.

The `id` field uses a unique identifier so we can later set the session ID to the user `id`.

The worst thing you can do is store plain text passwords so the password should always be hashed in case your database gets compromised.

Create the database from the schema.

```shell:terminal
npx prisma db push
```

You can look at your database through a graphical user interface with `npx prisma studio` at [http://localhost:5555/](http://localhost:5555/).

Install the Prisma client which is awesome because the code it generates is fully typed.

```shell:terminal
npm i @prisma/client
```

Create a `src/lib/database.ts` file so we can export the Prisma client and use it anywhere.

```ts:src/lib/database.ts
import prisma from '@prisma/client'

export const db = new prisma.PrismaClient()
```

That's it! 😄

## User Registration

First edit the `routes/index.svelte` and create a layout inside `routes/__layout.svelte`.

```html:index.svelte showLineNumbers
<h1>Public</h1>
```

```html:__layout.svelte showLineNumbers
<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<nav>
  <a href="/">Home</a>

  <a href="/login">Login</a>
  <a href="/register">Register</a>

  <a href="/protected">Admin</a>
  <a href="/auth/logout">Log out</a>
</nav>

<slot />
```

I want to keep things simple to focus on authentication, so I'm not going to use a form library or a Svelte action but I am going to add a helper function for fetching data.

You might have seen code like this.

```ts:example.ts
await fetch('/api', {
  method: 'POST',
  body: JSON.stringify({ username, password })
})
```

You can still `bind` the `username` and `password` values for client-side validation if you want but let's leverage the web platform and use a `<form>` and progressive enhancement.

Create a `src/lib/api.ts` file.

```ts:src/lib/api.ts showLineNumbers
type Send = Promise<{
  error?: string
  success?: string
  user?: { username: string }
}>

export async function send(form: HTMLFormElement): Send {
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { accept: 'application/json' },
  })
  return await response.json()
}
```

This takes advantage of the web platform because a form has information that you would otherwise have to pass yourself and you can get the form data inside the page endpoint.

Using a `<form>` is important for progressive enhancement so the user can use the site in case JavaScript fails.

Thanks to the `response` which returns a `body` object with an `error` or `success` value sent from the page endpoint we can show it on the client.

If you're unfamiliar with SvelteKit you create pages inside `routes`.

Create a `auth/register/index.svelte` page.

```html:auth/register/index.svelte showLineNumbers
<script lang="ts">
  import { send } from '$lib/api'

  // these props are passed from the page endpoint
  // so the user can get feedback if JavaScript doesn't work
  export let error: string
  export let success: string

  // this runs on the client when JavaScript is available
  // so we can just reuse the existing `error` and `success` props
  async function register(event: SubmitEvent) {
    error = ''

    const formEl = event.target as HTMLFormElement
    const response = await send(formEl)

    if (response.error) {
      error = response.error
    }

    if (response.success) {
      success = response.success
    }

    formEl.reset() // using the web platform 💪
  }
</script>

<form on:submit|preventDefault={register} method="post">
  <div>
    <label for="username">Username</label>
    <input
      id="username"
      name="username"
      type="username"
      required
    />
  </div>

  <div>
    <label for="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      required
    />
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  {#if success}
    <p>Thank you for signing up!</p>
    <p><a href="/auth/login">You can log in.</a></p>
  {/if}

  <button type="submit">Sign Up</button>
</form>

<style>
  .error {
    color: tomato;
  }
</style>
```

You don't have to define an `action` if you're using a page endpoint since it lives on the same path such as `action="/auth/register"` unless you want to be explicit.

Using a `<form>` if JavaScript fails for whatever reason it's going to use the form `action` to submit it but if JavaScript is on the page it's going to use the submit event instead — this is **progressive enhancement**.

> 🐿️ To get the values from a form it's important you use the `name` attribute because you get the value using `await form.get('username')`.

In the page endpoint for `auth/register` is going to receive the form data and do some light validation and create the user.

For hashing the password you're going to need `bcrypt`.

```shell:terminal
npm i bcrypt
npm i -D @types/bcrypt
```

> 🐿️ For hashing the password `bcrypt` is great because it uses a slow encryption algorithm meaning the attacker is more likely to die of old age than breaking the encryption — learn more by reading [How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/).

Create the `auth/register/index.ts` page endpoint.

<details>
  <summary>auth/register/index.ts</summary>

```ts:auth/register/index.ts showLineNumbers
import type { RequestHandler } from '@sveltejs/kit'
import * as bcrypt from 'bcrypt'

import { db } from '$lib/database'

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const username = form.get('username')
  const password = form.get('password')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return {
      status: 400,
      body: {
        error: 'Something went horribly wrong.',
      },
    }
  }

  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: 'Username and password is required.',
      },
    }
  }

  try {
    await db.user.create({
      data: {
        username,
        passwordHash: await bcrypt.hash(password, 10),
      },
    })

    return {
      status: 200,
      body: { success: 'Success.' },
    }
  } catch (error) {
    return {
      status: 400,
      body: {
        error: 'User already exists.',
      },
    }
  }
}
```

There's more lines of code for validation than the actual registration logic we need to create a user — you could add even more client side and server side validation. 🙈

The user is unique, so Prisma is going to return an error we can show if the user already exists.

That's it. 😎

</details>

## User Login

Create the `auth/login/index.svelte` page which is almost identical to the registration page.

You have to set the `session` from the data you get from the page endpoint so it causes the `load` function to rerun.

<details>
  <summary>auth/login/index.svelte</summary>

```html:auth/login/index.svelte showLineNumbers

<script lang="ts">
  import { session } from '$app/stores'
  import { send } from '$lib/api'

  export let error: string

  async function login(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement
    const response = await send(formEl)

    if (response.error) {
      error = response.error
    }

    $session.user = response.user

    formEl.reset()
  }
</script>

<form on:submit|preventDefault={login} method="post">
  <div>
    <label for="username">Username</label>
    <input
      id="username"
      name="username"
      type="username"
      required
    />
  </div>

  <div>
    <label for="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      required
    />
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <button type="submit">Sign In</button>
</form>

<style>
  .error {
    color: tomato;
  }
</style>
```

</details>

Before you add the `login` page yYou're going to need the `cookie` package, so setting and parsing the cookie header is easier.

```shell:terminal
npm i cookie
npm i -D @types/cookie
```

Create the `auth/login/login.ts` page endpoint.

<details>
  <summary></summary>

```ts:auth/login/login.ts showLineNumbers
import type { RequestHandler } from '@sveltejs/kit'
import * as bcrypt from 'bcrypt'
import * as cookie from 'cookie'

import { db } from '$lib/database'

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const username = form.get('username')
  const password = form.get('password')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return {
      status: 400,
      body: {
        error: 'Enter a valid username and password.',
      },
    }
  }

  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: 'Username and password is required.',
      },
    }
  }

  const user = await db.user.findUnique({
    where: { username },
  })
  const passwordMatch =
    user &&
    (await bcrypt.compare(password, user.passwordHash))

  if (!user || !passwordMatch) {
    return {
      status: 400,
      body: {
        error: 'You entered the wrong credentials.',
      },
    }
  }

  return {
    status: 200,
    body: {
      // for updating the session on the client
      user: { username },
      success: 'Success.',
    },
    headers: {
      'Set-Cookie': cookie.serialize('session', user.id, {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // and serves to protect from CSRF
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // only sent over HTTPS
        secure: process.env.NODE_ENV === 'production',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
      }),
    },
  }
}
```

</details>

To authenticate the user you get the `user` from the database and compare if the passwords match with `bcrypt.compare(password, user.passwordHash)`.

If the passwords match a `Set-Cookie` HTTP response header is set with the `user.id` as the session ID and options.

> 🐿️ The name `session` for the cookie is arbitrary — you can name the cookie whatever you want.

I'm using a [HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) cookie which is more secure because you can't use the JavaScript `document.cookie` API to get the cookie on the client and using `secure` ensures the cookie can only be sent using an encrypted HTTPS connection.

If you ever noticed the "remember me" checkbox option on sites this sets the expiration date for the cookie to be longer — here it's set to 30 days.

You can learn more about [using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) if you want.

> 🐿️ Using a cookie for authentication is simple but you can also create a `Sessions` table in your database to keep track of sessions across devices.

Try to log in! 😄

Open the developer tools and under the **Application** tab you can find **Cookies** and you should see the cookie. 🍪

## Passing User Data To Endpoints

SvelteKit has an optional `hooks.ts` file you can use to intercept a `request` and change the `response` — if you're familiar with [Express](https://expressjs.com/) you can think of hooks as middleware.

Here's the most basic example of using hooks to change the `response`.

```ts:hooks.ts showLineNumbers
export const handle = async ({ event, resolve }) => {
  if (event.url.pathname === '/') {
    return new Response('🍌')
  }

  return await resolve(event)
}
```

This is **bananas**!

Being able to manipulate the `response` lets you change response headers, the body and create endpoints — read more about [Hooks](https://kit.svelte.dev/docs/hooks).

I encourage you to do `console.log(event)` for the `event` — the output is in the terminal since it's on the server.

```shell:terminal
{
  clientAddress: [Getter],
  locals: {},
  params: {},
  platform: undefined,
  request: Request { ... },
  routeId: '',
  url: URL { ... }
}
```

The `event` has everything page endpoints have such as `request`, `locals`, `params`, `platform`, `routeId` and `url` while `response` invokes the SvelteKit's router and generates a response.

I parse the cookie and check for the session and then add the user information to `locals` so it's available in page endpoints.

```shell:terminal
{
  // ...
  locals: { user: { username: 'Username' } }
  // ...
}
```

Create the `src/hooks.ts` file.

```ts:src/hooks.ts showLineNumbers
import type { GetSession, Handle } from '@sveltejs/kit'
import * as cookie from 'cookie'

import { db } from '$lib/database'

export const handle: Handle = async ({
  event,
  resolve,
}) => {
  const cookieHeader = event.request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader ?? '')

  if (!cookies.session) {
    return await resolve(event)
  }

  const session = await db.user.findUnique({
    where: { id: cookies.session },
  })

  if (session) {
    event.locals.user = { username: session.username }
  }

  return await resolve(event)
}
```

To expose values from `locals` to the client you use `getSession` from SvelteKit but **make sure the values are safe** so don't include sensitive information on the client.

```ts:src/hooks.ts showLineNumbers
import type { GetSession, Handle } from '@sveltejs/kit'

// ...

export const getSession: GetSession = ({ locals }) => {
  if (!locals.user) return {}

  return {
    user: {
      username: locals.user.username,
    },
  }
}
```

There's some TypeScript errors, so let's add the types for the user to `src/app.d.ts` inside your project.

```ts:src/app.d.ts
/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {
    user?: { username: string }
  }

 // interface Platform {}

 interface Session {
    user?: { username: string }
  }

 // interface Stuff {}
}
```

Let me explain where you use these values so it makes more sense.

The `locals` value is available in page endpoints.

```ts:example.ts showLineNumbers
export const get = async ({ locals }) => {
  console.log(locals)
}
```

The `getSession` function passes the value to `session` that is available in the `load` function and from the SvelteKit store.

```html:example.svelte
<script context="module" lang="ts">
  export const load = ({ session }) => {
    console.log(session)
    return {}
  }
</script>

<script lang="ts">
  import { session } from '$app/stores'
  console.log($session)
</script>
```

Hope this clears it up!

## Securing Routes

To check if the user is logged in we can check the `session` for `session.user` — if it doesn't exist it redirects to `/login` otherwise it returns the `username` from the `session`.

Create the `protected/index.svelte` page.

```html:protected/index.svelte showLineNumbers
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session }) => {
    if (!session.user) {
      return {
        status: 302,
        redirect: '/login',
      }
    }

    return {
      status: 200,
      props: {
        user: session.user.username,
      },
    }
  }
</script>

<script lang="ts">
  export let user: string
</script>

<h1>Protected</h1>

<p>Welcome {user}!</p>
```

Redirect the authenticated user if they land on the `register` or `login` page.

> 🐿️ When using the `load` function you have to pass `props` from the page endpoint otherwise those values would be `undefined`.

<details>
  <summary>auth/register/index.svelte</summary>

```html:auth/register/index.svelte showLineNumbers
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session, props }) => {
    if (session.user) {
      return {
        status: 302,
        redirect: '/',
      }
    }

    return { props }
  }
</script>

<!-- ... -->
```

</details>

<details>
  <summary>auth/login/index.svelte</summary>

```html:auth/login/index.svelte showLineNumbers
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session, props }) => {
    if (session.user) {
      return {
        status: 302,
        redirect: '/',
      }
    }

    return { props }
  }
</script>

<!-- ... -->
```

</details>

## Logout Users

The logout uses a simple `GET` request that removes the cookie — it's going to cause a page refresh but you can avoid it if you use a form with progresive enhancement.

Create the `auth/logout/index.ts` endpoint.

```ts:auth/logout/index.ts showLineNumbers
import type { RequestHandler } from '@sveltejs/kit'
import * as cookie from 'cookie'

export const get: RequestHandler = async () => {
  return {
    status: 303,
    headers: {
      'Set-Cookie': cookie.serialize('session', '', {
        path: '/',
        // the cookie should expire immediately
        expires: new Date(0),
      }),
      location: '/',
    },
  }
}
```

> 🐿️ This works because `new Date(0)` returns the Epoch time — 1 January 1970.

## Conditional Rendering Using Session

The last step is to update the layout so it renders the navigation items based on if the user is authenticated.

```html:routes/__layout.svelte showLineNumbers
<script lang="ts">
  import { session } from '$app/stores'
</script>

<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<nav>
  <a href="/">Home</a>

  {#if !$session.user}
    <a href="/auth/login">Login</a>
    <a href="/auth/register">Register</a>
  {/if}

  {#if $session.user}
    <a href="/protected">Admin</a>
    <a href="/auth/logout">Log out</a>
  {/if}
</nav>

<slot />
```

That's it! 🥳

Authentication using SvelteKit and cookies is simple and the concepts you learned are transferable since you leverage the web platform.

Thanks for reading! 🏄️