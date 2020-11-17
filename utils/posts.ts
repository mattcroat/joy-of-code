import fs from 'fs'
import path from 'path'

export const postsPath = path.join(process.cwd(), 'posts')

export const postFilePaths = fs
  .readdirSync(postsPath)
  .filter((path) => /\.mdx?$/.test(path))
