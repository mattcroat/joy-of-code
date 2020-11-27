// node
import fs from 'fs'
import path from 'path'

// mdx
import matter from 'gray-matter'

export const postsPath = path.join(process.cwd(), 'posts')

export const postFilePaths = fs
  .readdirSync(postsPath)
  .filter((path) => /\.mdx?$/.test(path))

export const getPosts = postFilePaths.map((slug) => {
  const postPath = `${postsPath}/${slug}`

  const fileContents = fs.readFileSync(postPath, 'utf-8')
  const { data: frontMatter } = matter(fileContents)
  frontMatter.slug = slug.replace(/\.mdx?$/, '')

  return frontMatter
})
