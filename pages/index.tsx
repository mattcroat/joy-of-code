import { getPosts, getSortedPosts } from '@/root/utils/helpers/posts'
import { Home } from '@/root/components/screens/Home'

interface PageProps {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
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
