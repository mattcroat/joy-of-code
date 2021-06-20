import fs from 'fs'
import path from 'path'

// MDX sauce
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// MDX plugins
import codeTitle from 'remark-code-titles'
import rehypePrism from '@mapbox/rehype-prism'
import unwrapImages from 'remark-unwrap-images'

import { postFilePaths, postsPath } from '@/root/utils/helpers/posts'
import { Post } from '@/root/components/screens/Post'

interface PostProps {
  source: {
    compiledSource: string
    renderedOutput: string
    scope?: any
  }
  frontMatter: {
    category: string
    description: string
    image: string
    published: number
    slug: string
    title: string
  }
}

interface Params {
  params: {
    slug: string
  }
}

export default function PostPage({ source, frontMatter }: PostProps) {
  return <Post content={source} frontMatter={frontMatter} />
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

  const MDXSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      remarkPlugins: [codeTitle, unwrapImages],
    },
  })

  return {
    props: {
      source: MDXSource,
      frontMatter: data,
    },
  }
}
