import { getPostsByCategory, getSortedPosts } from '@/root/utils/helpers/posts'
import { Category } from '@/root/components/screens/Category'

import type { CategoryType } from '@/root/types/category'
import type { PostType } from '@/root/types/post'

interface PageProps {
  category: CategoryType
  posts: PostType[]
}

export default function NextPage({ category, posts }: PageProps) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('Next')

  return {
    props: {
      category: 'Next',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
