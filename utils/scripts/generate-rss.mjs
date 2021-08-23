import {
  accessSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import RSS from 'rss'

const FEED_PATH = './public/feed'
const RSS_PATH = `${FEED_PATH}/rss.xml`

async function exists(path) {
  try {
    accessSync(path)
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

  const posts = readdirSync(join(process.cwd(), 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      const content = readFileSync(join(process.cwd(), 'posts', name))
      const { data: frontMatter } = matter(content)

      feed.item({
        title: frontMatter.title,
        description: frontMatter.description,
        url: `https://joyofcode.xyz/${name.replace(/\.mdx?/, '')}`,
      })
    })
  )

  const folder = await exists(FEED_PATH)

  if (!folder) {
    mkdirSync(FEED_PATH)
    writeFileSync(RSS_PATH, feed.xml({ indent: '  ' }))
  } else {
    writeFileSync(RSS_PATH, feed.xml({ indent: '  ' }))
  }
}

generateRSSFeed()
