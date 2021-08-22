import { getPosts, getSortedPosts } from '@/root/utils/helpers/posts'
import { Home } from '@/root/components/screens/Home'

import type { CategoryType } from '@/root/types/category'
import type { PostType } from '@/root/types/post'

interface PageProps {
  category: CategoryType
  posts: PostType[]
}

export default function IndexPage({ posts }: PageProps) {
  return <Home posts={posts} />
}

export async function getStaticProps() {
  return {
    props: {
      posts: getSortedPosts(getPosts),
    },
  }
}
