import { CategoryType } from '@/root/types/category'
import { getSortedPosts } from '@/root/utils/mdx'
import { Home } from '@/root/components/screens/home'
import { PostType } from '@/root/types/post'

interface PageProps {
  category: CategoryType
  posts: PostType[]
}

export default function IndexPage({ posts }: PageProps) {
  return <Home posts={posts} />
}

export async function getStaticProps() {
  const sortedPosts = await getSortedPosts()

  return {
    props: {
      posts: sortedPosts,
    },
  }
}
