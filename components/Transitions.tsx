// ui components
import { motion } from 'framer-motion'

// types
import { ReactNode } from 'react'

interface SlideFadeProps {
  children: ReactNode
}

// variants
const opacityVariants = {
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

export const SlideFade = ({ children }: SlideFadeProps): JSX.Element => (
  <motion.div initial="hidden" animate="visible" variants={opacityVariants}>
    {children}
  </motion.div>
)
