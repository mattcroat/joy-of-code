import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import { getPaths, getPost } from '@/root/utils/mdx'
import { MDXComponents } from '@/root/components/mdx'
import { Post } from '@/root/components/screens/post'
import { PostType } from '@/root/types/post'

interface PostProps {
  code: string
  frontmatter: PostType
}

interface Params {
  params: {
    slug: string
  }
}

export default function PostPage({ code, frontmatter }: PostProps) {
  const Content = useMemo(() => getMDXComponent(code), [code])
  return (
    <Post
      content={<Content components={MDXComponents as any} />}
      frontmatter={frontmatter}
    />
  )
}

export async function getStaticPaths() {
  const paths = getPaths()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const { code, frontmatter } = await getPost(params.slug)

  return {
    props: {
      code,
      frontmatter,
    },
  }
}
