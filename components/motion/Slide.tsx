import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  right?: boolean
}

const slideVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
      duration: 0.6,
    },
  },
}

const Slide: FC<Props> = ({ children, right }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={!right ? slideVariants : slideRightVariants}
  >
    {children}
  </motion.div>
)

export default Slide
