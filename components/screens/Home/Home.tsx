import { CardGrid } from '@/root/components/shared/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

import type { PostType } from '@/root/types/post'

interface HomeProps {
  posts: PostType[]
}

export function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <h1>
        <span className="inline-block mt-2 mr-2 lg:mt-0">Welcome Friend</span>
        <Emoji emoji="👋" label="Waving hand emoji" />
      </h1>
      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

      {posts.length < 1 && (
        <div className="flex gap-2 my-8">
          <p>Nothing to see here...</p>
          <Emoji emoji="🕵️" label="Spy emoji" />
        </div>
      )}

      <div className="mt-6 md:mt-12">
        <span className="block mb-4 font-bold uppercase md:text-xl text-highlight">
          {'🌟'} Featured
        </span>
        <CardGrid featured={true} posts={posts} />
      </div>

      <div className="mt-6 md:mt-12">
        <span className="block mb-4 font-bold uppercase md:text-xl text-highlight">
          {'🔺'} Latest
        </span>
        <CardGrid posts={posts} />
      </div>
    </Layout>
  )
}
