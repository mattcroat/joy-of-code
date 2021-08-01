import { motion } from 'framer-motion'

import { Card } from './Card'

import type { Category } from '@/root/types/category'

interface CardGridProps {
  posts: {
    title: string
    description: string
    published: string
    category: Category
    slug: string
  }[]
}

const cardGridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export function CardGrid({ posts }: CardGridProps) {
  return (
    <motion.div
      animate="show"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-cards"
      initial="hidden"
      variants={cardGridVariants}
    >
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} category={category} slug={slug} title={title} />
      ))}
    </motion.div>
  )
}
