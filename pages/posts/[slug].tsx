import fs from 'fs'
import path from 'path'

import { Box } from '@chakra-ui/react'
import matter from 'gray-matter'
import rehypePrism from '@mapbox/rehype-prism'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/Layout'

import { postsPath, postFilePaths } from '@/utils/posts'

interface PostPageProps {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(postsPath, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const MDXSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      remarkPlugins: [codeTitle],
    },
  })

  return {
    props: {
      MDXSource,
      frontMatter: data,
    },
  }
}

const PostPage = ({ MDXSource, frontMatter }: PostPageProps): JSX.Element => {
  const content = hydrate(MDXSource)

  return (
    <Layout title={frontMatter.title}>
      <Box width="90ch" mx="auto">
        {content}
      </Box>
    </Layout>
  )
}

export default PostPage
