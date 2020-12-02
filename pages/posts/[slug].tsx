import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'

// mdx sauce
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

// mdx plugins
import rehypePrism from '@mapbox/rehype-prism'
import codeTitle from 'remark-code-titles'
import unwrapImages from 'remark-unwrap-images'

import { Layout } from '@/components/layout'
import { Credits } from '@/components/ui'

import { postsPath, postFilePaths } from '@/utils/posts'

interface Props {
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

// mdx components
const components = { Credits }

// generate paths at build-time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

// grab and process mdx post by the slug "posts/[slug]"
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(postsPath, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const MDXSource = await renderToString(content, {
    components: { components },
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      remarkPlugins: [codeTitle, unwrapImages],
    },
  })

  return {
    props: {
      MDXSource,
      frontMatter: data,
    },
  }
}

const PostPage: FC<Props> = ({ MDXSource, frontMatter }) => {
  const content = hydrate(MDXSource, { components })

  return (
    <Layout title={frontMatter.title}>
      <Box w={{ lg: '90ch' }} mx="auto" px={8}>
        {content}
      </Box>
    </Layout>
  )
}

export default PostPage
