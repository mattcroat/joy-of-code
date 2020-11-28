import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { Wave } from '@/components/motion'

interface Props {
  emoji: string
  label: string
}

const Emoji: FC<Props> = ({ emoji, label }) => (
  <Box d="inline-block" mx={4} aria-label={label} role="img">
    <Wave>{emoji}</Wave>
  </Box>
)

export default Emoji
