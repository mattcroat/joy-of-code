import { expect, test } from '@playwright/test'

test.describe('pages', () => {
	test('should show landing page', async ({ page }) => {
		await page.goto('/')
		expect(page.locator('h1')).toBeTruthy()
	})

	test('should show post', async ({ page }) => {
		await page.goto('/simpler-color-syntax')
		expect(page.locator('h1')).toBeTruthy()
	})

	test('should show archive page', async ({ page }) => {
		await page.goto('/archive')
		expect(page.locator('text=archive'))
	})

	test('should show series page', async ({ page }) => {
		await page.goto('/series')
		expect(page.locator('text=series'))
	})

	test('should show newsletter page', async ({ page }) => {
		await page.goto('/newsletter')
		expect(page.locator('text=newsletter'))
	})

	test('should show uses page', async ({ page }) => {
		await page.goto('/uses')
		expect(page.locator('text=uses'))
	})

	test('should show about page', async ({ page }) => {
		await page.goto('/about')
		expect(page.locator('text=about'))
	})

	test('should show posts in categories', async ({ page }) => {
		await page.goto('/categories/svelte')
		expect(page.locator('.cards')).toBeTruthy()
	})

	test('should show rss.xml', async ({ page }) => {
		const response = await page.goto('/rss.xml')
		expect(response.status()).toBe(200)
		expect(await response.headerValue('content-type')).toBe('application/xml')
	})

	test('should show sitemap.xml', async ({ page }) => {
		const response = await page.goto('/sitemap.xml')
		expect(response.status()).toBe(200)
		expect(await response.headerValue('content-type')).toBe('application/xml')
	})
})
