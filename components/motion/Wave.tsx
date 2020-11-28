import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

const showVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
}

const waveVariants = {
  wave: {
    rotate: [0, 20, 0],
    transition: {
      delay: 0.6,
      repeat: 2,
    },
  },
}

const Wave: FC<Props> = ({ children }) => (
  <motion.div initial="hidden" animate="show" variants={showVariants}>
    <motion.div animate="wave" variants={waveVariants}>
      {children}
    </motion.div>
  </motion.div>
)

export default Wave
