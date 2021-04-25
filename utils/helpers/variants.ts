export const slide = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

export const fadeInStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export const emojiAppear = {
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

export const emojiWave = {
  wave: {
    rotate: [0, 20, 0],
    transition: {
      delay: 0.6,
      repeat: 2,
    },
  },
}
