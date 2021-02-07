// not to future self: this can only be used inside getStaticProps,
// as packages such as 'fs' don't work in the browser and throw an error
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

interface Post {
  category: string
  description: string
  published: number
  slug: string
  title: string
}

export const postsPath = path.join(process.cwd(), 'posts')

export const postFilePaths = fs
  .readdirSync(postsPath)
  .filter((path) => /\.mdx?$/.test(path))

export const getPosts = postFilePaths.map((slug) => {
  const postPath = `${postsPath}/${slug}`

  const fileContents = fs.readFileSync(postPath, 'utf-8')
  const { data: frontMatter } = matter(fileContents)

  frontMatter.published = new Date(frontMatter.published).valueOf()
  frontMatter.slug = slug.replace(/\.mdx?$/, '')

  return frontMatter
}) as Array<Post>

export function getPostsByCategory(category: string) {
  const filteredPosts = getPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )

  return filteredPosts
}

export function getSortedPosts(posts: Array<Post>) {
  if (!posts) return
  const sortedPosts = posts.sort((a, b) => b.published - a.published)
  return sortedPosts
}
