import { CardGrid } from '@/root/components/shared/CardGrid'
import { CategoryType } from '@/root/types/category'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'
import { PostType } from '@/root/types/post'

interface CategoryProps {
  category: CategoryType
  posts: PostType[]
  title: string
}

interface TitleProps {
  title: string
}

interface PostsProps {
  posts: PostType[]
}

function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="mt-2 lg-mt-0">{title}</h1>
      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>
    </>
  )
}

function Posts({ posts }: PostsProps) {
  if (posts.length < 1) {
    return (
      <div className="flex gap-2 my-8">
        <p>Nothing to see here...</p>
        <Emoji emoji="🕵️" label="Spy emoji" />
      </div>
    )
  }

  return (
    <div className="my-12">
      <CardGrid posts={posts} />
    </div>
  )
}

export function Category({ category, posts, title }: CategoryProps) {
  return (
    <Layout title={`Joy of Code | ${category}`}>
      <Title title={title} />
      <Posts posts={posts} />
    </Layout>
  )
}
