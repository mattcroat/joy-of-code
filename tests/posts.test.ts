import { expect, test } from '@playwright/test'

test.describe('posts', () => {
  test('should sort posts by views', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const viewsTextContent = await page
      .locator('.popular + .cards .views span')
      .allTextContents()

    const views = viewsTextContent.map((views) => views.replace(',', ''))
    const sortedViews = [...views].sort((first, last) => +last - +first)

    expect(views).toEqual(sortedViews)
  })

  test('should sort posts by newest', async ({ page, request }) => {
    await page.goto('/')

    const response = await request.get('__data.json')
    const data = await response.json()
    const posts = data.posts.latest
    const sortedPosts = [...posts].sort((first, last) => {
      return (
        new Date(last.published).getTime() - new Date(first.published).getTime()
      )
    })

    expect(posts).toEqual(sortedPosts)
  })

  test('should show series', async ({ page }) => {
    await page.goto('/')
    expect(page.locator('.series + .cards')).toBeTruthy()
  })

  test('should show picks', async ({ page }) => {
    await page.goto('/')
    expect(page.locator('.picks + .cards')).toBeTruthy()
  })
})
