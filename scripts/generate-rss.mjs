import { bundleMDXFile } from 'mdx-bundler'
import fs from 'fs'
import path from 'path'
import RSS from 'rss'

const FEED_PATH = './public/feed'
const RSS_PATH = `${FEED_PATH}/rss.xml`
const currentDirectory = process.cwd()

async function exists(path) {
  try {
    fs.accessSync(path)
  } catch (error) {
    return false
  }

  return true
}

async function generateRSSFeed() {
  const feed = new RSS({
    title: 'Joy of Code',
    site_url: 'https://joyofcode.xyz/',
    feed_url: 'https://joyofcode.xyz/rss/feed.xml',
  })

  const posts = fs.readdirSync(path.join(currentDirectory, 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      const postPath = path.join(currentDirectory, 'posts', name, `${name}.mdx`)
      const { frontmatter } = await bundleMDXFile(postPath)

      feed.item({
        title: frontmatter.title,
        description: frontmatter.description,
        url: `https://joyofcode.xyz/${name.replace(/\.mdx?/, '')}`,
      })
    })
  )

  const folder = await exists(FEED_PATH)

  if (!folder) {
    fs.mkdirSync(FEED_PATH)
    fs.writeFileSync(RSS_PATH, feed.xml({ indent: '  ' }))
  } else {
    fs.writeFileSync(RSS_PATH, feed.xml({ indent: '  ' }))
  }
}

generateRSSFeed()
