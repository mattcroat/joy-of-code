interface SpinProps {
  spin: boolean
  duration?: number
  delay?: number
  children: React.ReactChild
  style?: {
    [key: string]: string
  }
}

export function Spin({
  spin = false,
  duration = 300,
  delay = 0,
  children,
  ...props
}: SpinProps) {
  return (
    <div
      {...props}
      style={{
        ...(props.style ?? {}),
        animationName: spin ? 'spin' : '',
        animationFillMode: 'backwards',
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
