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

export default function JavaScriptPage({ category, posts }: Props) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('JavaScript')

  return {
    props: {
      category: 'JavaScript',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
