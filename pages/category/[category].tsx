import { categories } from '@/root/utils/categories'
import { Category } from '@/root/components/screens/category'
import { CategoryType } from '@/root/types/category'
import { getPostsByCategory } from '@/root/utils/mdx'
import { PostType } from '@/root/types/post'

interface PostCategoryProps {
  category: CategoryType
  posts: PostType[]
  title: string
}

interface Context {
  params: {
    category: string
  }
}

export default function PostCategory({
  category,
  posts,
  title,
}: PostCategoryProps) {
  return <Category category={category} posts={posts} title={title} />
}

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { category: category.toLowerCase() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: Context) {
  const { category } = context.params
  const posts = await getPostsByCategory(category)
  const title = categories.find(
    (item) => item.toLowerCase() === category.toLowerCase()
  )

  return {
    props: {
      category,
      posts,
      title,
    },
  }
}
