import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

import type { PostType } from '@/root/types/post'

export const postsPath = path.join(process.cwd(), 'posts')

export const postFilePaths = readdirSync(postsPath).filter((path) =>
  /\.mdx?$/.test(path)
)

export const getPosts = postFilePaths.map((slug) => {
  const postPath = `${postsPath}/${slug}`

  const fileContents = readFileSync(postPath, 'utf-8')
  const { data: frontMatter } = matter(fileContents)

  frontMatter.published = new Date(frontMatter.published).valueOf()
  frontMatter.slug = slug.replace(/\.mdx?$/, '')

  return frontMatter as PostType
})

export function getPostsByCategory(category: string) {
  const filteredPosts = getPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
  return filteredPosts
}

export function getSortedPosts(posts: Array<PostType>) {
  if (!posts) return
  const sortedPosts = posts.sort((a, b) => +b.published - +a.published)
  return sortedPosts
}
