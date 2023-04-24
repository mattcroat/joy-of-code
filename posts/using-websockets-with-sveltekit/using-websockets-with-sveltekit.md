---
title: Using WebSockets With SvelteKit
description: Learn how to use a custom SvelteKit server for WebSockets.
slug: using-websockets-with-sveltekit
published: '2022-5-1'
category: sveltekit
---

{% youtube id="mAcKzdW5fR8" title="Using WebSockets With SvelteKit" %}

## Table of Contents

## Using WebSockets

By the end of this post you're going to learn how to make WebSockets work in SvelteKit for development and production.

If you're reading this in the future SvelteKit might have native support for WebSockets similar to how it does HTTP request methods so it might be worth checking the documentation.

```ts:endpoint.ts showLineNumbers
export const  GET: RequestHandler = async () => { /* ... */ }

export const  POST: RequestHandler = async () => { /* ... */ }

// This doesn't exist yet unfortunately 😅
export const WS: WebSocketRequestHandler = async () => { /* ... */ }
```

You can read more about it inside the [discussion about native support for WebSockets inside SvelteKit](https://github.com/sveltejs/kit/issues/1491) if you want.

One solution is to create a separate server but then you have to run two things on separate ports so let me show you how you can do it using SvelteKit instead.

## WebSockets For Development

To make use of WebSockets during development you need to write a simple [Vite](https://vitejs.dev/) plugin that hooks into the Vite development server.

Thanks to [Bob Fanger](https://github.com/bfanger) for his [workaround](https://github.com/sveltejs/kit/issues/1491#issuecomment-955205323).

This might sound intimidating but it's not — trust me I'm not an expert. 😄

Vite has a [configureServer hook](https://vitejs.dev/guide/api-plugin.html#configureserver) which lets you configure the development server.

This is the code for the Vite plugin.

```js:example.js showLineNumbers
const plugin = {
  name: 'plugin',
  configureServer(server) {
    // we can pass the server to Socket.io
    const io = new Server(server.httpServer)
    // ...
  }
}
```

That's it!

There's more Socket.io code in the final version but you can use any WebSocket library you prefer.

To avoid backtracking install the [Node adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) with `npm i -D @sveltejs/adapter-node` because it's required for this to work.

Add the plugin code inside `svelte.config.js` or extract it into a separate file.

```js:svelte.config.js {1, 4, 6-15, 22-24} showLineNumbers
import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'

import { Server } from 'socket.io'

const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server) {
    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {
      socket.emit('eventFromServer', 'Hello, World 👋')
    })
  },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [webSocketServer],
    },
  },
}

export default config
```

> 🐿️ Use a dynamic import if you need to import code that's not a module inside `webSocketServer` for example `const code = await import('./code.js')` otherwise you're going to encounter an error.

Here's an example how this works using `Socket.io` on the client.

```html:example.svelte showLineNumbers
<script lang="ts">
  import { io } from 'socket.io-client'

  const socket = io()

  socket.on('eventFromServer', (message) => {
    console.log(message)
  })
</script>
```

If you start the development server with `npm run dev` it should work and you should see the `Hello, World 👋` message in the console!

If you want to emmit a message when a value changes don't forget you can use a reactive block.

```html:example.svelte showLineNumbers
<script lang="ts">
  // ...

  $: {
    // send message to server
    socket.emit('eventFromClient', $reactiveValue)
  }
</script>
```

## WebSockets For Production

Thanks to the Sveltekit [Node adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) you can create a [custom server](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) and do whatever you want.

I'm going to use [Express](https://expressjs.com/) because it's a minimal web framework.

```shell:terminal
npm i express @types/express
```

The Node adapter creates the `index.js` and `handler.js` files in your `build` folder when you run `npm run build` — creating a custom server works by importing the `handler` from `build/handler.js` and using your custom server instead of `index.js`.

Make sure you create the `build` folder.

```shell:terminal
npm run build
```

I've created the `server/index.js` file at the root of the project for convenience but this depends on your build step and where you're deploying it.

```js:server/index.js showLineNumbers
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { handler } from '../build/handler.js'

const port = 3000
const app = express()
const server = createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
  socket.emit('eventFromServer', 'Hello, World 👋')
})

// SvelteKit should handle everything else using Express middleware
// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
app.use(handler)

server.listen(port)
```

Add the script to start the server inside `package.json`.

```json:package.json showLineNumbers
{
  "scripts": {
    "start": "node ./server"
    // ...
  }
}
```

That's it! 🥳

You can run `npm start` and everything should work.

This looks similar to the Vite plugin from earlier but it's just a simple Express server.

If you need to pass environment variables I have a post on [using environment variables in SvelteKit](https://joyofcode.xyz/sveltekit-environment-variables).

Thanks for reading! 🏄️
