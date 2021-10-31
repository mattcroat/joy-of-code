import { useState } from 'react'

import { playSound } from '@/root/utils/play-sound'

interface SpinProps {
  duration?: number
  delay?: number
  children: React.ReactNode
  style?: {
    [key: string]: string
  }
}

export function Spin({
  duration = 300,
  delay = 0,
  children,
  ...props
}: SpinProps) {
  const [isPressed, setIsPressed] = useState(false)

  function spin() {
    setIsPressed(!isPressed)
    playSound('confirm')
  }

  return (
    <div
      onAnimationEnd={() => setIsPressed(false)}
      onClick={spin}
      onKeyPress={spin}
      role="button"
      {...props}
      style={{
        ...(props.style ?? {}),
        animationName: isPressed ? 'spin' : '',
        animationFillMode: 'backwards',
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
      tabIndex={-1}
    >
      {children}
    </div>
  )
}
