import { browser } from '$app/environment'
import { writable } from 'svelte/store'

class Preferences {
	textSize = writable(18)
	textLength = writable(90)
	textHeight = writable(40)

	constructor() {
		if (!browser) return

		const { textSize, textLength, textHeight } = localStorage

		if (textSize) this.textSize.set(+textSize.replace('px', ''))
		if (textLength) this.textLength.set(+textLength.replace('ch', ''))
		if (textHeight) this.textHeight.set(+textHeight.replace('px', ''))

		const html = document.documentElement

		this.textSize.subscribe((textSize) => {
			localStorage.textSize = `${textSize}px`
			html.style.setProperty('--post-txt-size', `${textSize}px`)
		})

		this.textLength.subscribe((textLength) => {
			localStorage.textLength = `${textLength}ch`
			html.style.setProperty('--post-txt-length', `${textLength}ch`)
		})

		this.textHeight.subscribe((textHeight) => {
			localStorage.textHeight = `${textHeight}px`
			html.style.setProperty('--post-txt-height', `${textHeight}px`)
		})
	}
}

export const { textSize, textLength, textHeight } = new Preferences()
