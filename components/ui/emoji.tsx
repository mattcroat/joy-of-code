import { Box } from '@chakra-ui/react'

import { Wave } from '@/components/motion'

interface Props {
  animate?: boolean
  emoji: string
  label: string
  spacing?: number
  [props: string]: any
}

export function Emoji({
  animate = false,
  emoji,
  label,
  spacing = 4,
  ...props
}: Props) {
  return (
    <Box
      as="span"
      d="inline-block"
      mx={spacing}
      aria-label={label}
      role="img"
      {...props}
    >
      {animate ? <Wave>{emoji}</Wave> : emoji}
    </Box>
  )
}
