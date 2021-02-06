import { SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

const MotionGrid = motion.custom(SimpleGrid)

const cardsGridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export function CardsGrid({ posts }: Props) {
  return (
    <MotionGrid
      spacing={8}
      minChildWidth={{ sm: '340px' }}
      animate="show"
      initial="hidden"
      variants={cardsGridVariant}
    >
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} theme={category} title={title} slug={slug} />
      ))}
    </MotionGrid>
  )
}
