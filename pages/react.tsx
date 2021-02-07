import { Category } from '@/components/screens'
import { getPostsByCategory, getSortedPosts } from '@/utils/posts'

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

export default function ReactPage({ category, posts }: Props) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('React')

  return {
    props: {
      category: 'React',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
