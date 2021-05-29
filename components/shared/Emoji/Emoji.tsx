import { Box } from '@chakra-ui/react'

import { MotionBox } from '@/root/components/shared/MotionBox'

interface EmojiProps {
  animate?: boolean
  emoji: string
  label: string
  spacing?: number
  [props: string]: any
}

const emojiAppearVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
}

const emojiWaveVariants = {
  wave: {
    rotate: [0, 20, 0],
    transition: {
      delay: 0.6,
      repeat: 2,
    },
  },
}

export function Emoji({
  animate = false,
  emoji,
  label,
  spacing = 4,
  ...props
}: EmojiProps) {
  return (
    <Box
      aria-label={label}
      as="span"
      d="inline-block"
      mx={spacing}
      role="img"
      {...props}
    >
      {animate ? (
        <>
          <MotionBox
            animate="show"
            initial="hidden"
            variants={emojiAppearVariants}
          >
            <MotionBox animate="wave" variants={emojiWaveVariants}>
              {emoji}
            </MotionBox>
          </MotionBox>
        </>
      ) : (
        emoji
      )}
    </Box>
  )
}
