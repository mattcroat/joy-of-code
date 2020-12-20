import { Grid } from '@chakra-ui/react'
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

const MotionGrid = motion.custom(Grid)

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
      gap={8}
      templateColumns={{ md: 'repeat(auto-fit, minmax(400px, 400px))' }}
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
