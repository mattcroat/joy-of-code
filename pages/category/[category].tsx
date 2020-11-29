import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Category } from '@/components/ui'

import { formatTitle, getPosts } from '@/utils/posts'

interface Props {
  category: string
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'javascript' } },
      { params: { category: 'react' } },
      { params: { category: 'web' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string

  const filteredPosts = getPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )

  return {
    props: {
      category: formatTitle(category),
      posts: filteredPosts,
    },
  }
}

const CategoryPage: FC<Props> = ({ category, posts }) => (
  <Category category={category} posts={posts} title={category} />
)

export default CategoryPage
