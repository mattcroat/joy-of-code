import { CardGrid } from '@/root/components/shared/card-grid'
import { Emoji } from '@/root/components/shared/emoji'
import { Layout } from '@/root/components/shared/layout'
import { PostType } from '@/root/types/post'

interface HomeProps {
  posts: PostType[]
}

function Welcome() {
  return (
    <>
      <h1>
        <span className="inline-block mt-2 mr-2 lg:mt-0">Welcome Friend</span>
        <Emoji emoji="👋" label="Waving hand emoji" />
      </h1>
      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>
    </>
  )
}

function Posts({ posts }: HomeProps) {
  if (posts.length < 1) {
    return (
      <div className="flex gap-2 my-8">
        <p>Nothing to see here...</p>
        <Emoji emoji="🕵️" label="Spy emoji" />
      </div>
    )
  }

  return (
    <>
      <div className="mt-6 md:mt-12">
        <span className="block mb-4 font-bold uppercase md:text-xl text-highlight">
          Featured
        </span>
        <CardGrid featured={true} posts={posts} />
      </div>

      <div className="mt-6 md:mt-12">
        <span className="block mb-4 font-bold uppercase md:text-xl text-highlight">
          Latest
        </span>
        <CardGrid posts={posts} />
      </div>
    </>
  )
}

export function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} />
    </Layout>
  )
}
