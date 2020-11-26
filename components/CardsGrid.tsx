// ui components
import { Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// components
import Card from '@/components/Card'

// motion components
const MotionGrid = motion.custom(Grid)

// variants
const cardsGridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const CardsGrid = (): JSX.Element => (
  <MotionGrid
    gap={8}
    templateColumns={{ md: 'repeat(auto-fit, minmax(400px, 400px))' }}
    animate="show"
    initial="hidden"
    variants={cardsGridVariant}
  >
    <Card theme="js" title="JavaScript Card Title" />
    <Card theme="react" title="React Card Title" />
    <Card theme="web" title="Web Card Title" />
  </MotionGrid>
)

export default CardsGrid
