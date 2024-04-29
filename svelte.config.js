import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sequence, preprocessMeltUI } from '@melt-ui/pp'
import sveltemark from './src/lib/preprocessor/index.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: sequence([sveltemark(), vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'meta-shift',
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right',
		},
	},
}

export default config
