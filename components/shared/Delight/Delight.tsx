import React from 'react'

import { MotionBox } from '@/root/components/shared/MotionBox'
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
    <MotionBox animate={{ rotate: (isPressed && 360) || 0 }} onClick={delight}>
      {children}
    </MotionBox>
  )
}
