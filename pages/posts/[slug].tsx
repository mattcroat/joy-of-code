// ui components
import { Box } from '@chakra-ui/react'

// filesystem
import fs from 'fs'
import path from 'path'

// mdx sauce
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

// mdx plugins
import rehypePrism from '@mapbox/rehype-prism'
import codeTitle from 'remark-code-titles'

// components
import Layout from '@/components/Layout'

// utils
import { postsPath, postFilePaths } from '@/utils/posts'

// types
import { GetStaticPaths, GetStaticProps } from 'next'

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
      <Box w={{ lg: '90ch' }} mx="auto" px={[8, null]}>
        {content}
      </Box>
    </Layout>
  )
}

export default PostPage
