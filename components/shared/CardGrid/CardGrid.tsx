import { Card } from './Card'

import { FadeIn } from '@/root/components/animation'

import type { PostType } from '@/root/types/post'

interface CardGridProps {
  posts: PostType[]
}

export function CardGrid({ posts }: CardGridProps) {
  return (
    <FadeIn duration={1000}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-cards">
        {posts.map(({ category, title, slug }) => (
          <Card key={slug} category={category} slug={slug} title={title} />
        ))}
      </div>
    </FadeIn>
  )
}
