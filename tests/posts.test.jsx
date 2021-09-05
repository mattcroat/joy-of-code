import {
  getPostsByCategory,
  getSortedPosts,
  postFilePaths,
} from '@/root/utils/posts'
import { categories } from '@/root/utils/categories'

test('returns posts', () => {
  const posts = postFilePaths.length
  expect(posts).toBeGreaterThan(0)
})

test('returns posts by category', () => {
  const noPosts = getPostsByCategory('nothing').length
  expect(noPosts).toBe(0)

  const lowercase = getPostsByCategory('javascript').length
  expect(lowercase).toBeGreaterThan(0)

  const uppercase = getPostsByCategory('JavaScript').length
  expect(uppercase).toBeGreaterThan(0)

  categories.forEach((category) => {
    // "design" currently has no posts
    if (category.toLowerCase() === 'design') return
    const posts = getPostsByCategory(category).length
    expect(posts).toBeGreaterThan(0)
  })
})

test('returns sorted posts', () => {
  const unsortedPosts = [
    { title: 'First Post', published: 1608249600000 },
    { title: 'Second Post', published: 1616886000000 },
    { title: 'Third Post', published: 1623016800000 },
    { title: 'Fourth Post', published: 1630188000000 },
  ]
  const sortedPosts = [
    { title: 'Fourth Post', published: 1630188000000 },
    { title: 'Third Post', published: 1623016800000 },
    { title: 'Second Post', published: 1616886000000 },
    { title: 'First Post', published: 1608249600000 },
  ]
  const posts = getSortedPosts(unsortedPosts)
  expect(posts).toEqual(sortedPosts)
})
