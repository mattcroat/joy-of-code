import { sveltekit } from '@sveltejs/kit/vite'
import { webSocketServer } from './socket/plugin.js'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), webSocketServer],
}

export default config
