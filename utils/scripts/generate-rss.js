const { promises: fs } = require('fs')
const path = require('path')

const matter = require('gray-matter')
const RSS = require('rss')

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

  await fs.mkdir('./public/feed')
  await fs.writeFile('./public/feed/rss.xml', feed.xml({ indent: true }))
}

generateRSSFeed()
