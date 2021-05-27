import {
  Box,
  HTMLChakraProps,
  SimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

type Merge<ChakraProps, MotionProps> = Omit<ChakraProps, keyof MotionProps> &
  MotionProps
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>
type MotionSimpleGridProps = Merge<
  HTMLChakraProps<'div'>,
  HTMLMotionProps<'div'>
> &
  SimpleGridProps

export const MotionBox: React.FC<MotionBoxProps> = motion(Box)
export const MotionSimpleGrid: React.FC<MotionSimpleGridProps> = motion(
  SimpleGrid
)
