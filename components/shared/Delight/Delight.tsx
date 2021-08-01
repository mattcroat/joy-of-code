import { motion } from 'framer-motion'
import { useState } from 'react'

import type { ReactNode } from 'react'

import { playSound } from '@/root/utils/helpers/playSound'

interface DelightProps {
  children: ReactNode
}

export function Delight({ children }: DelightProps) {
  const [isPressed, setIsPressed] = useState(false)

  function delight() {
    setIsPressed(!isPressed)
    playSound('confirm')
  }

  return (
    <motion.div animate={{ rotate: (isPressed && 360) || 0 }} onClick={delight}>
      {children}
    </motion.div>
  )
}
