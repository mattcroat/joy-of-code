import { motion } from 'framer-motion'

interface EmojiProps {
  emoji: string
  label: string
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

export function Emoji({ emoji, label }: EmojiProps) {
  return (
    <div aria-label={label} className="inline-block" role="img">
      <motion.div
        animate="show"
        initial="hidden"
        variants={emojiAppearVariants}
      >
        <motion.div animate="wave" variants={emojiWaveVariants}>
          {emoji}
        </motion.div>
      </motion.div>
    </div>
  )
}
