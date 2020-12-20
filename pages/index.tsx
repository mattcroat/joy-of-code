import { Home } from '@/components/screens'
import { getPosts } from '@/utils/posts'

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

// get posts metadata
export async function getStaticProps() {
  return {
    props: {
      posts: getPosts,
    },
  }
}
