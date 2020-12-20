import fs from 'fs'
import path from 'path'

// MDX sauce
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

// MDX plugins
import rehypePrism from '@mapbox/rehype-prism'
import codeTitle from 'remark-code-titles'
import unwrapImages from 'remark-unwrap-images'

import { Post } from '@/components/screens'
import { MDXComponents } from '@/components/ui'

import { postsPath, postFilePaths } from '@/utils/posts'

interface Post {
  MDXSource: {
    compiledSource: string
    renderedOutput: string
    scope?: unknown
  }
  frontMatter: {
    title: string
    description: string
  }
}

interface Params {
  params: {
    slug: string
  }
}

export default function PostPage({ MDXSource, frontMatter }: Post) {
  const content = hydrate(MDXSource, { components: MDXComponents })

  return <Post title={frontMatter.title} content={content} />
}

// generate paths at build-time
export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

// grab and process MDX post by the slug "posts/[slug]"
export async function getStaticProps({ params }: Params) {
  const postFilePath = path.join(postsPath, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxOptions = {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [codeTitle, unwrapImages],
  }

  const MDXSource = await renderToString(content, { mdxOptions })

  return {
    props: {
      MDXSource,
      frontMatter: data,
    },
  }
}
