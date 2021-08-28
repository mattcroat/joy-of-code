import globby from 'globby'
import prettier from 'prettier'
import { writeFileSync } from 'fs'

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.tsx',
    'posts/*.mdx',
    '!pages/_*.tsx',
    '!pages/[slug].tsx',
    '!pages/404.tsx',
    '!pages/api',
    '!pages/editor.tsx',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('posts', '')
          .replace('.tsx', '')
          .replace('.mdx', '')
        const route = path === '/index' ? '' : path

        return `<url>
            <loc>${`https://joyofcode.xyz${route}`}</loc>
          </url>
        `
      })
      .join('')}
    </urlset>
  `

  const formattedSitemap = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync('public/sitemap.xml', formattedSitemap)
}

generateSitemap()
