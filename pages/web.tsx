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

export default function WebPage({ category, posts }: Props) {
  if (!posts || posts.length < 1) {
    return <h1>Could not retrieve posts.</h1>
  }

  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('web')

  return {
    props: {
      category: 'Web',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
