import { getPostsByCategory, getSortedPosts } from '@/root/utils/posts'
import { Category } from '@/root/components/screens/Category'

import type { CategoryType } from '@/root/types/category'
import type { PostType } from '@/root/types/post'

interface PageProps {
  category: CategoryType
  posts: PostType[]
}

export default function DesignPage({ category, posts }: PageProps) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('design')

  return {
    props: {
      category: 'Design',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
