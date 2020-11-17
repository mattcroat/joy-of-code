import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'

import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/Layout'

import { postsPath, postFilePaths } from '@/utils/posts'
const PostPage = ({ source, frontMatter }): JSX.Element => {
  const content = hydrate(source)

  return <Layout title={frontMatter.title}>{content}</Layout>
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(postsPath, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const MDXSource = await renderToString(content)

  return {
    props: {
      source: MDXSource,
      frontMatter: data,
    },
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
