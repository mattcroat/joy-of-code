import React from 'react'

import { MotionBox } from '@/root/components/shared/MotionBox'
import { playSound } from '@/root/utils/helpers/playSound'

interface DelightProps {
  children: React.ReactNode
}

export function Delight({ children }: DelightProps) {
  const [isPressed, setIsPressed] = React.useState(false)

  function delight() {
    setIsPressed(!isPressed)
    playSound('confirm')
  }

  return (
    <MotionBox animate={{ rotate: (isPressed && 360) || 0 }} onClick={delight}>
      {children}
    </MotionBox>
  )
}
