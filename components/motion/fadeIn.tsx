import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

export function FadeIn({ children }: Props) {
  return (
    <motion.div initial="hidden" animate="show" variants={fadeInVariants}>
      {children}
    </motion.div>
  )
}
