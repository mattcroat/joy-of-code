import posthog from 'posthog-js'
import { browser } from '$app/environment'
import { beforeNavigate, afterNavigate } from '$app/navigation'

export function initAnalytics() {
	if (browser) {
		posthog.init('phc_nZDwmyGFBKKFyA7fag8ia0Lq9PYMqxeofhojcOX67jW', {
			api_host: 'https://eu.i.posthog.com',
			capture_pageview: false,
			capture_pageleave: false,
		})
	}
	return
}

export function useAnalytics() {
	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'))
		afterNavigate(() => posthog.capture('$pageview'))
	}
}
