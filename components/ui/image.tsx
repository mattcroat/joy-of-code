import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

interface Props {
  alt: string
  src: string
}

const MotionBox = motion.custom(Box)

const ImageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

export function Image({ alt, src }: Props) {
  return (
    <MotionBox
      position="relative"
      w={{ xl: '140%' }}
      mx={{ xl: '-20%' }}
      my={{ sm: 8 }}
      initial="hidden"
      animate="show"
      variants={ImageVariants}
    >
      <NextImage
        height="540px"
        width="1000px"
        alt={alt}
        src={src}
        layout="responsive"
        objectFit="contain"
      />
    </MotionBox>
  )
}
