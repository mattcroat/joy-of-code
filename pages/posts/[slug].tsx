import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/Layout'
import MDXComponents from '@/components/MDXComponents'

import { postsPath, postFilePaths } from '@/utils/posts'

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

  const MDXSource = await renderToString(content, { MDXComponents })

  return {
    props: {
      MDXSource,
      frontMatter: data,
    },
  }
}

const PostPage = ({ MDXSource, frontMatter }): JSX.Element => {
  const content = hydrate(MDXSource, { MDXComponents })

  return <Layout title={frontMatter.title}>{content}</Layout>
}

export default PostPage
