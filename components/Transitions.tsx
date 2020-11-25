// ui components
import { motion } from 'framer-motion'

// types
import { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  right?: boolean
}

// variants
const slideVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const slideRightVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const Slide = ({ children, right }: SlideProps): JSX.Element => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={!right ? slideVariants : slideRightVariants}
  >
    {children}
  </motion.div>
)
