import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import path from 'path'

import { webSocketServer } from './socket/plugin.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $root: path.resolve('./src'),
        },
      },
      plugins: [webSocketServer],
    },
    methodOverride: { allowed: ['DELETE'] },
  },
}

export default config
