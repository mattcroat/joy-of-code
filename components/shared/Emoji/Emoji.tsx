import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { emojiAppear, emojiWave } from '@/root/utils/helpers/variants'

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
      {animate ? (
        <>
          <motion.div initial="hidden" animate="show" variants={emojiAppear}>
            <motion.div animate="wave" variants={emojiWave}>
              {emoji}
            </motion.div>
          </motion.div>
        </>
      ) : (
        emoji
      )}
    </Box>
  )
}
