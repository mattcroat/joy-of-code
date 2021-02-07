import { Home } from '@/components/screens'
import { getPosts, getSortedPosts } from '@/utils/posts'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export default function IndexPage({ posts }: Props) {
  return <Home posts={posts} />
}

export async function getStaticProps() {
  return {
    props: {
      posts: getSortedPosts(getPosts),
    },
  }
}
