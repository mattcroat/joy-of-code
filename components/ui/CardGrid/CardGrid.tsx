import { SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Card } from '@/root/components/ui/CardGrid/Card'
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
    <motion.div animate="show" initial="hidden" variants={fadeInStagger}>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(auto, 420px))"
        spacing={8}
      >
        {posts.map(({ category, title, slug }) => (
          <Card key={slug} theme={category} title={title} slug={slug} />
        ))}
      </SimpleGrid>
    </motion.div>
  )
}
