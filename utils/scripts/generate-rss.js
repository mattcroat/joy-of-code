const { promises: fs } = require('fs')
const path = require('path')

const matter = require('gray-matter')
const RSS = require('rss')

const FEED_PATH = './public/feed'
const RSS_PATH = `${FEED_PATH}/rss.xml`

async function exists(path) {
  try {
    await fs.access(path)
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

  const postsPath = path.join(__dirname, '..', '..', 'posts')
  const posts = await fs.readdir(postsPath)

  await Promise.all(
    posts.map(async (name) => {
      const postPath = path.join(__dirname, '..', '..', 'posts', name)
      const content = await fs.readFile(postPath)
      const { data: frontMatter } = matter(content)

      feed.item({
        title: frontMatter.title,
        description: frontMatter.description,
        url: `https://joyofcode.xyz/${name.replace(/\.mdx?/, '')}`,
      })
    })
  )

  const doesExist = await exists(FEED_PATH)

  if (!doesExist) {
    await fs.mkdir(FEED_PATH)
    await fs.writeFile(RSS_PATH, feed.xml({ indent: true }))
  } else {
    await fs.writeFile(RSS_PATH, feed.xml({ indent: true }))
  }
}

generateRSSFeed()
