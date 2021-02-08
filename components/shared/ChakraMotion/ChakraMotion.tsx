import { Box, forwardRef, SimpleGrid } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

export const ChakraMotion = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )

    return <Box ref={ref} {...chakraProps} />
  })
)

export const ChakraMotionGrid = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )

    return <SimpleGrid ref={ref} {...chakraProps} />
  })
)
