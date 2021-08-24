import { Card } from './Card'

import { FadeIn } from '@/root/components/animation'

import type { PostType } from '@/root/types/post'

interface CardGridProps {
  featured?: boolean
  posts: PostType[]
}

const featuredPosts = ['TypeScript Fundamentals', 'Using Fonts on The Web']

export function CardGrid({ featured = false, posts }: CardGridProps) {
  return (
    <FadeIn duration={1000}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-cards">
        {featured &&
          posts
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
        {!featured &&
          posts.map(({ category, title, slug }) => (
            <Card
              key={slug}
              category={category}
              featured={featured}
              slug={slug}
              title={title}
            />
          ))}
      </div>
    </FadeIn>
  )
}
