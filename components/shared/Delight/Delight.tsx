import React from 'react'
import { motion } from 'framer-motion'

import { playSound } from '@/root/utils/helpers/playSound'

interface Props {
  children: React.ReactNode
}

export function Delight({ children }: Props) {
  const [isPressed, setIsPressed] = React.useState(false)

  function delight() {
    setIsPressed(!isPressed)
    playSound('confirm')
  }

  return (
    <motion.div onClick={delight} animate={{ rotate: (isPressed && 360) || 0 }}>
      {children}
    </motion.div>
  )
}
