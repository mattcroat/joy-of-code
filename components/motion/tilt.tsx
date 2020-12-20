import { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface Props {
  children: ReactNode
}

export function Tilt({ children }: Props) {
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  // https://www.framer.com/api/motion/motionvalue/#usetransform
  // maps one range of values to another
  const rotateX = useTransform(y, [0, 400], [10, -10])
  const rotateY = useTransform(x, [0, 400], [-10, 10])

  const handlePointerMove = (e: PointerEvent) => {
    const rect = (e.target as HTMLInputElement).getBoundingClientRect()

    // x, y position within the element
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const handlePointerOut = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      style={{
        height: '100%',
        width: '100%',
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: 1000,
        cursor: 'pointer',
        transition: 'transform 0.1s linear',
      }}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      {children}
    </motion.div>
  )
}
