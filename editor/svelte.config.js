import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $root: 'src',
    },
    methodOverride: { allowed: ['DELETE'] },
  },
}

export default config
