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

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const GridContainer = motion.custom(SimpleGrid)

export function CardsGrid({ posts }: Props) {
  return (
    <GridContainer
      minChildWidth={{ sm: '340px' }}
      spacing={8}
      animate="show"
      initial="hidden"
      variants={grid}
    >
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} theme={category} title={title} slug={slug} />
      ))}
    </GridContainer>
  )
}
