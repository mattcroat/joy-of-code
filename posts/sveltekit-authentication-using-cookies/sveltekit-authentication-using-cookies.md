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

In this post you're going to learn how to authenticate users securely using cookies to have protected routes.

I'm using a regular SvelteKit skeleton project with TypeScript but if you want to follow along create a new SvelteKit project with `npm init svelte auth` or pick SvelteKit from one of the fullstack options at [StackBlitz](https://stackblitz.com/) (it uses Node.js in the browser 🤯).

Let's start by creating a SQLite database using [Prisma](https://www.prisma.io/) — it's just a file on your system, so you don't have to think about it.

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

// this turns into SQL and creates the `User` table

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

Install the Prisma client which is awesome because the code it generated is fully typed.

```shell:terminal
npm i @prisma/client
```

Let's create a `src/lib/database.ts` file so we can export the Prisma client and use it anywhere.

```ts:src/lib/database.ts
import prisma from '@prisma/client'

export const db = new prisma.PrismaClient()
```

That's it! 😄

## User Registration

First let's edit the `routes/index.svelte` and create a layout inside `routes/__layout.svelte`.

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
</nav>

<slot />
```

Create a `routes/register/index.svelte` file.

> 🐿️ I prefer to keep things organized but you can just create a `register.svelte` file.

```html:routes/register/index.svelte showLineNumbers
<script lang="ts">
  let error = ''

  async function register(event: SubmitEvent) {
    // ...
  }
</script>

<form
  on:submit|preventDefault={register}
  action="/auth/register"
  method="post"
>
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

  <button type="submit">Sign Up</button>
</form>

<style>
  .error {
    color: tomato;
  }
</style>
```

I want to keep things simple so we can focus on authentication, so I'm not going to use a form library or Svelte action.

If you define a `action` and `method` attribute on the form it's going to work if JavaScript fails for whatever reason and if JavaScript is loaded it's going to use the submit event — this is **progressive enhancement**.

This is not only great for progressive enhancement but the form already gets serialized, so we can get the `action`, `method` and `data` from it and send it to the server.

> 🐿️ To get the values from a form it's important you use the `name` attribute.

You might have seen code like this.

```ts:example.ts
async function example() {
  await fetch('/api', {
    method: 'POST',
    // this is what you're going to see most of the time
    // where you take state like username, password and serialize it
    // so you can do `const { username, password } = await response.json()` on the server
    body: JSON.stringify({ username, password })
  })
}
```

You can still `bind` the `username` and `password` values for client-side validation if you want but let's leverage the web platform and send the form to the server instead of using `JSON.stringify`.

For the `register` function this looks as such.

```html:routes/register/index.svelte showLineNumbers
<script lang="ts">
  async function register(event: SubmitEvent) {
    // we already have access to the form, so we don't have to recreate it
    const form = event.target as HTMLFormElement
    // turn it into something we can send to the server inside `body`
    const data = new FormData(form)

    // we can get the `action`, `method` from the form
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { accept: 'application/json' },
    })
  }
</script>
```

This is awesome!

One last thing to do is add some error validation. If you encounter an error on the server it's going to send a response with a `body` that has an `error` property you can check for and show the error message and if the registration is a success we can use `goto` from SvelteKit to redirect the user.

This is the complete code for `routes/register/index.svelte`.

<details>
  <summary>routes/register/index.svelte</summary>

```html:routes/register/index.svelte showLineNumbers
<script lang="ts">
  import { goto } from '$app/navigation'

  let error = ''

  async function register(event: SubmitEvent) {
    const form = event.target as HTMLFormElement
    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { accept: 'application/json' },
    })
    const body = await response.json()

    if (!response.ok) {
      if (body.error) {
        error = body.error
      }
      return
    }

    await goto('/')
  }
</script>

<form
  on:submit|preventDefault={register}
  action="/auth/register"
  method="post"
>
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

  <button type="submit">Sign Up</button>
</form>

<style>
  .error {
    color: tomato;
  }
</style>
```

</details>

For hashing the password you're going to need `bcrypt`.

```shell:terminal
npm i bcrypt
npm i -D @types/bcrypt
```

> 🐿️ For hashing the password `bcrypt` is great because it uses a slow encryption algorithm meaning the attacker is more likely to die of old age than breaking the encryption — learn more by reading [How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/).

Create the register API endpoint `routes/auth/register.ts`.

<details>
  <summary>routes/auth/register.ts</summary>

```ts:routes/auth/register.ts showLineNumbers
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
      status: 303,
      body: {
        error: 'Something went horribly wrong.',
      },
      headers: { location: '/register' },
    }
  }

  if (!username || !password) {
    return {
      status: 303,
      body: {
        error: 'Username and password is required.',
      },
      headers: { location: '/register' },
    }
  }

  try {
    await db.user.create({
      data: {
        username,
        passwordHash: await bcrypt.hash(password, 10),
      },
    })
  } catch (error) {
    return {
      status: 303,
      body: {
        error: 'User already exists.',
      },
      headers: { location: '/register' },
    }
  }

  return {
    status: 301,
    headers: { location: '/' },
  }
}
```

There's more lines of code for validation than actual logic we need to create a user.

As mentioned previously we get the form data from the `request` and do some validation on the server and then hash the password specifying how strong the encryption should be and create the user with Prisma.

The user is unique, so Prisma is going to return an error we can catch and return if the user already exists.

> 🐿️ The `location` header redirects the user if JavaScript isn't working and requires a 3xx status code.

That's it! 😄

You can try registering a user and look at the database using Prisma Studio.

I'm not going to authenticate the user at this point because they might have to verify their email, so I redirect them.

</details>

## User Login

Create the `routes/login/index.svelte` page which is identical to the register page.

<details>
  <summary>routes/login/index.svelte</summary>

```html:routes/login/index.svelte showLineNumbers
<script lang="ts">
  import { goto } from '$app/navigation'

  let error = ''

  async function login(event: SubmitEvent) {
    const form = event.target as HTMLFormElement
    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { accept: 'application/json' },
    })
    const body = await response.json()

    form.reset()

    if (!response.ok) {
      if (body.error) {
        error = body.error
      }
      return
    }

    await goto('/protected')
  }
</>

<form
  on:submit|preventDefault={login}
  action="/auth/login"
  method="post"
>
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

You're going to need the `cookie` package, so setting and parsing the cookie header is easier.

```shell:terminal
npm i cookie
npm i -D @types/cookie
```

The `login` API route is almost identical to `register`.

<details>
  <summary></summary>

```ts:routes/auth/login.ts showLineNumbers
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
      status: 303,
      body: {
        error: 'Something went horribly wrong.',
      },
      headers: { location: '/login' },
    }
  }

  if (!username || !password) {
    return {
      status: 303,
      body: {
        error: 'Username and password is required.',
      },
      headers: { location: '/login' },
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
      status: 303,
      body: {
        error: 'You entered the wrong credentials.',
      },
      headers: { location: '/login' },
    }
  }

  return {
    status: 301,
    body: {
      // set the session and navigate to `/protected`
      user: { user: { username } },
      message: 'Success.',
    },
    headers: {
      'Set-Cookie': cookie.serialize('session', user.id, {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // only sent over HTTPS
        secure: process.env.NODE_ENV === 'production',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
      }),
      location: '/protected',
    },
  }
}
```

</details>

To authenticate the user you get the `user` from the database and compare if the passwords match using `bcrypt.compare(password, user.passwordHash)`.

If the passwords match a `Set-Cookie` HTTP response header is set with the `user.id` as the session ID and options.

> 🐿️ The name `session` for the cookie is arbitrary, so you can name the cookie whatever you want.

I'm using a simple [HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) cookie meaning you can't use the JavaScript `document.cookie` API to get the cookie on the client making it more secure and using `secure` ensures the cookie can only be sent using an encrypted HTTPS connection.

If you have ever noticed the "remember me" checkbox option on sites this sets the expiration date for the cookie to be longer — here it's set to 30 days.

You can learn more about [using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) if you want.

> 🐿️ Using a cookie for authentication is simple but you can also create a `Sessions` table in your database to keep track of sessions. This is useful for use with multiple devices and being able to log out the user.

// todo: forgot to add session stuff inside login.svelte

Try to log in!

Open the developer tools and under the **Application** tab you can find **Cookies** and you should see your cookie. 🍪

## Passing User Data To Endpoints Using SvelteKit Hooks

It would be a lot easier if we checked for the session and pass the user data to all endpoints through `locals` and send values that are safe to the client through `session`.

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

The `event` has everything page endpoints have such as `request`, `locals`, `params`, `platform`, `routeId` and `url` while `response` invokes the SvelteKit's router and generates a response.

In our case I parse the cookie and check for the session and then add the user information to `locals` so it's available in page endpoints.

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

You're going to have some TypeScript errors, so let's add the types for the user to `src/app.d.ts` inside your project.

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

Hooks might be confusing to wrap your head around at first, so let me explain where you use these values.

1. The `locals` value is available in page endpoints

```ts:example.ts showLineNumbers
export const get = async ({ locals }) => {
  console.log(locals)
}
```

2. The `getSession` function passes the value to `session` that is available in the `load` function and from the SvelteKit store

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

You might already have an idea how we're going to secure the routes from the last section.

To check if the user is logged in we can check the `session` for `session.user`. If it doesn't exist it redirects to `/login` otherwise it returns the `username` from the `session`.

Create a `routes/protected/index.svelte` file.

```html:routes/protected/index.svelte showLineNumbers
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

Change the `register` and `login` page to redirect if someone visits it on accident.

<details>
  <summary>routes/register/index.svelte</summary>

```html:routes/register/index.svelte showLineNumbers
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session }) => {
    if (session.user) {
      return {
        status: 302,
        redirect: '/',
      }
    }

    return {}
  }
</script>

<!-- ... -->
```

</details>

<details>
  <summary>routes/login/index.svelte</summary>

```html:routes/login/index.svelte showLineNumbers
<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session }) => {
    if (session.user) {
      return {
        status: 302,
        redirect: '/',
      }
    }

    return {}
  }
</script>

<!-- ... -->
```

</details>

The last step is to update `__layout.svelte` so it shows and hides the navigation items based on if the user is logged in or not.

// todo: add logout

To trigger the redirect you have to update `$session`.

<details>
  <summary>routes/__layout.svelte</summary>

```html:routes/__layout.svelte showLineNumbers
<script lang="ts">
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'

  async function logout() {
    await fetch('/auth/logout', { method: 'post' })
    $session = {}
    await goto('/')
  }
</script>

<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<nav>
  <a href="/">Home</a>

  {#if !$session.user}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  {/if}

  {#if $session.user}
    <a href="/protected">Admin</a>

    <form
      on:submit|preventDefault={logout}
      action="/auth/logout"
      method="post"
    >
      <button type="submit">Log out</button>
    </form>
  {/if}
</nav>

<slot />
```

</details>

That's it! 🥳

Authentication using SvelteKit and cookies is simple and the concepts you learned are transferable since you leverage the web platform.

Thanks for reading! 🏄️
