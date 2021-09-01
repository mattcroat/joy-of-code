import { join } from 'path'
import { readFileSync } from 'fs'

// MDX sauce
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// MDX plugins
import rehypePrism from '@mapbox/rehype-prism'
import remarkCodeTitle from 'remark-code-titles'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkUnwrapImages from 'remark-unwrap-images'

import { postFilePaths, postsPath } from '@/root/utils/posts'
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
  const postFilePath = join(postsPath, `${params?.slug}.mdx`)
  const source = readFileSync(postFilePath)

  const { content, data } = matter(source)

  const MDXSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      remarkPlugins: [
        remarkSlug,
        remarkHeadings,
        remarkCodeTitle,
        remarkUnwrapImages,
      ],
    },
  })

  return {
    props: {
      source: MDXSource,
      frontMatter: data,
    },
  }
}
