import { Card } from './Card'
import { ChakraMotionGrid } from '@/root/components/shared/ChakraMotion'
import { fadeInStagger } from '@/root/utils/helpers/variants'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export function CardGrid({ posts }: Props) {
  return (
    <ChakraMotionGrid
      templateColumns="repeat(auto-fill, minmax(auto, 420px))"
      spacing={8}
      animate="show"
      initial="hidden"
      variants={fadeInStagger}
    >
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} theme={category} title={title} slug={slug} />
      ))}
    </ChakraMotionGrid>
  )
}
