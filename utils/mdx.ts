import { bundleMDXFile } from 'mdx-bundler'
import { BundleMDXOptions } from 'mdx-bundler/dist/types'
import fs from 'fs'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from '@silvenon/remark-smartypants'
import remarkTableofContents from 'remark-toc'
import remarkUnwrapImages from 'remark-unwrap-images'

export function getPosts() {
  const currentDirectory = process.cwd()
  const posts = fs.readdirSync(`${currentDirectory}/posts`)
  return posts
}

export function getPaths() {
  const paths = getPosts().map((path) => ({
    params: { slug: path },
  }))
  return paths
}

export async function getPost(slug: string) {
  // markdown plugins
  const options: BundleMDXOptions = {
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // github flavored markdown
        remarkGfm,
        // add id to headings
        remarkHeadings,
        // add links to headings
        remarkSlug,
        // smart typographic punctuation like real quotes
        remarkSmartypants,
        // generates table of contents from headings
        // `tight` removes <p> from <li> when nested
        [remarkTableofContents, { tight: true }],
        // remove paragraph around images
        remarkUnwrapImages,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // title for code blocks (has to come before `rehypePrism`)
        rehypeCodeTitles,
        // syntax highlight
        rehypePrism,
      ]
      return options
    },
  }

  const currentDirectory = process.cwd()
  const postPath = `${currentDirectory}/posts/${slug}/${slug}.mdx`
  const markdown = await bundleMDXFile(postPath, options)
  const { code, frontmatter } = markdown

  return { code, frontmatter }
}

export async function getSortedPosts() {
  const currentDirectory = process.cwd()
  const posts = getPosts()

  const postsMetadata = []

  for (const post of posts) {
    const postPath = `${currentDirectory}/posts/${post}/${post}.mdx`
    const markdown = await bundleMDXFile(postPath)
    const { frontmatter } = markdown

    const timestamp = new Date(frontmatter.published).valueOf()
    frontmatter.published = timestamp

    postsMetadata.push(frontmatter)
  }

  // sort posts by oldest to newest
  const sortedPosts = postsMetadata.sort(
    (firstEl, secondEl) => secondEl.published - firstEl.published
  )

  return sortedPosts
}

export async function getPostsByCategory(category: string) {
  const currentDirectory = process.cwd()
  const postFolders = getPosts()
  const postPaths = postFolders.map(
    (folder) => `${currentDirectory}/posts/${folder}/${folder}.mdx`
  )

  const posts = []

  for (const path of postPaths) {
    const markdown = await bundleMDXFile(path)
    const { frontmatter } = markdown

    if (frontmatter.category === category) {
      posts.push(frontmatter)
    }
  }

  // sort posts by oldest to newest
  const sortedPosts = posts.sort(
    (firstEl, secondEl) => secondEl.published - firstEl.published
  )

  return sortedPosts
}
