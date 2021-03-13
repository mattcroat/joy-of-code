import { Category } from '@/root/components/screens/Category'
import { getPostsByCategory, getSortedPosts } from '@/root/utils/helpers/posts'

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

export default function GeneralPage({ category, posts }: Props) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('general')

  return {
    props: {
      category: 'General',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
