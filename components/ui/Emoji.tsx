import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { Wave } from '@/components/motion'

interface Props {
  emoji: string
  label: string
  spacing?: number
}

const Emoji: FC<Props> = ({ emoji, label, spacing = 4 }) => (
  <Box d="inline-block" mx={spacing} aria-label={label} role="img">
    <Wave>{emoji}</Wave>
  </Box>
)

export default Emoji
