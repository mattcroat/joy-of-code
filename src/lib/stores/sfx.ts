import { readable } from 'svelte/store'

/**
 * Credits
 * https://www.zapsplat.com/music/organic-button-click-good-for-apps-games-ui-software-etc-7/
 */

const sfx = {
	click() {
		const click = new Audio('/sfx/click.mp3')
		click.volume = 0.4
		click.play()
	},
}

export const sounds = readable(sfx)
