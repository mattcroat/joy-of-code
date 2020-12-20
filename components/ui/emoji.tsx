import { Box } from '@chakra-ui/react'

import { Wave } from '@/components/motion'

interface Props {
  animate?: boolean
  emoji: string
  label: string
  spacing?: number
}

export function Emoji({ animate = false, emoji, label, spacing = 4 }: Props) {
  return (
    <Box as="span" d="inline-block" mx={spacing} aria-label={label} role="img">
      {animate ? <Wave>{emoji}</Wave> : emoji}
    </Box>
  )
}
