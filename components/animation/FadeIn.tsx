interface FadeInProps {
  duration?: number
  delay?: number
  children: React.ReactChild
  style?: {
    [key: string]: string
  }
}

export function FadeIn({
  duration = 300,
  delay = 0,
  children,
  ...props
}: FadeInProps) {
  return (
    <div
      {...props}
      style={{
        ...(props.style ?? {}),
        animationName: 'fadeIn',
        animationFillMode: 'backwards',
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
