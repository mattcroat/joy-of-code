// ui components
import { motion, useMotionValue, useTransform } from 'framer-motion'

// types
import { MouseEvent, ReactNode } from 'react'

interface TiltProps {
  children: ReactNode
}

const Tilt = ({ children }: TiltProps): JSX.Element => {
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  // https://www.framer.com/api/motion/motionvalue/#usetransform
  // maps one range of values to another
  const rotateX = useTransform(y, [0, 400], [10, -10])
  const rotateY = useTransform(x, [0, 400], [-10, 10])

  const handleMouseMove = (e: MouseEvent) => {
    const rect = (e.target as HTMLInputElement).getBoundingClientRect()

    // x, y position within the element
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      style={{
        width: 480,
        height: 280,
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: 1000,
        cursor: 'pointer',
        transition: 'all 0.1s linear',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default Tilt
