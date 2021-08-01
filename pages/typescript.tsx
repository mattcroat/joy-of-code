import { getPostsByCategory, getSortedPosts } from '@/root/utils/helpers/posts'
import { Category } from '@/root/components/screens/Category'

import type { Category as Categories } from '@/root/types/category'

interface PageProps {
  category: string
  posts: {
    title: string
    description: string
    published: string
    category: Categories
    slug: string
  }[]
}

export default function TypeScriptPage({ category, posts }: PageProps) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('TypeScript')

  return {
    props: {
      category: 'TypeScript',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
