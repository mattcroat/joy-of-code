import { CardGrid } from '@/root/components/shared/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

import type { Category } from '@/root/types/category'

interface HomeProps {
  posts: {
    title: string
    description: string
    published: string
    category: Category
    slug: string
  }[]
}

export function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <h1>
        <span className="mr-4">Welcome Friend</span>
        <Emoji emoji="👋" label="Waving hand emoji" />
      </h1>

      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

      {posts.length < 1 && (
        <div className="flex gap-2 my-8">
          <p>Nothing to see here...</p>
          <Emoji emoji="🕵️" label="Spy emoji" />
        </div>
      )}

      <div className="mt-12">
        <h2 className="mb-8 text-highlight">Latest</h2>
        <CardGrid posts={posts} />
      </div>
    </Layout>
  )
}
