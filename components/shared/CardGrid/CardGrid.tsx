import { Card } from './Card'

import { FadeIn } from '@/root/components/animation'

import { featuredPosts } from '@/root/utils/featured'
import type { PostType } from '@/root/types/post'

interface CardGridProps {
  featured?: boolean | undefined
  posts: PostType[]
}

function FeaturedPosts({ featured, posts }: CardGridProps) {
  return (
    <>
      {posts
        .filter(({ title }) => featuredPosts.includes(title))
        .map(({ category, title, slug }) => (
          <Card
            key={slug}
            category={category}
            featured={featured}
            slug={slug}
            title={title}
          />
        ))}
    </>
  )
}

function Posts({ posts }: CardGridProps) {
  return (
    <>
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} category={category} slug={slug} title={title} />
      ))}
    </>
  )
}

export function CardGrid({ featured, posts }: CardGridProps) {
  return (
    <FadeIn duration={1000}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-cards">
        {featured && <FeaturedPosts featured={featured} posts={posts} />}
        {!featured && <Posts posts={posts} />}
      </div>
    </FadeIn>
  )
}
