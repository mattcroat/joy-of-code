import React from 'react'
import { motion } from 'framer-motion'

import { useSound } from '@/root/utils/hooks'

interface Props {
  children: React.ReactNode
}

export function Delight({ children }: Props) {
  const [isPressed, setIsPressed] = React.useState(false)
  const playSound = useSound('/sfx/confirm.mp3')

  function delight() {
    setIsPressed(!isPressed)
    playSound()
  }

  return (
    <motion.div onClick={delight} animate={{ rotate: (isPressed && 360) || 0 }}>
      {children}
    </motion.div>
  )
}
