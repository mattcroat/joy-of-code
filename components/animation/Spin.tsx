import { useState } from 'react'

interface SpinProps {
  playSound?: () => void
  duration?: number
  delay?: number
  children: React.ReactNode
  style?: {
    [key: string]: string
  }
}

export function Spin({
  playSound,
  duration = 300,
  delay = 0,
  children,
  ...props
}: SpinProps) {
  const [isPressed, setIsPressed] = useState(false)

  function spin() {
    setIsPressed(!isPressed)
    playSound && playSound()
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
      tabIndex={0}
    >
      {children}
    </div>
  )
}
