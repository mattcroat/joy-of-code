import { useState } from 'react'

import { playSound } from '@/root/utils/helpers/playSound'
import { Spin } from '@/root/components/animation'

import type { ReactNode } from 'react'

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
    <Spin spin={isPressed}>
      <div onClick={delight} onKeyPress={delight} role="button" tabIndex={0}>
        {children}
      </div>
    </Spin>
  )
}
