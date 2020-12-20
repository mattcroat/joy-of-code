import { Category } from '@/components/screens'
import { getPosts } from '@/utils/posts'

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

export default function WebPage({ category, posts }: Props) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPosts.filter(
    (post) => post.category.toLowerCase() === 'web'
  )

  return {
    props: {
      category: 'Web',
      posts: filteredPosts,
    },
  }
}
