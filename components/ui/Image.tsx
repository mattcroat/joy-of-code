import { FC } from 'react'
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

const Image: FC<Props> = ({ alt, src }) => (
  <MotionBox
    position="relative"
    h={{ base: '400px', lg: '600px' }}
    w={{ xl: '140%' }}
    mx={{ xl: '-20%' }}
    my={{ sm: 8 }}
    initial="hidden"
    animate="show"
    variants={ImageVariants}
  >
    <NextImage alt={alt} src={src} layout="fill" objectFit="contain" />
  </MotionBox>
)

export default Image
