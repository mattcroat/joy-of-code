import { Box } from '@chakra-ui/react'

import { Wave } from '@/components/motion'

interface Props {
  emoji: string
  label: string
  spacing?: number
}

export function Emoji({ emoji, label, spacing = 4 }: Props) {
  return (
    <Box d="inline-block" mx={spacing} aria-label={label} role="img">
      <Wave>{emoji}</Wave>
    </Box>
  )
}
