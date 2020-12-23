import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

import { FadeIn } from '@/components/motion'

interface Props {
  height: string
  width: string
  src: string
  alt: string
}

export function Image({ height, width, src, alt }: Props) {
  return (
    <Box
      position="relative"
      max={{ xl: '120%' }}
      mx={{ xl: '-10%' }}
      my={{ sm: 8 }}
    >
      <FadeIn>
        <NextImage
          height={height}
          width={width}
          alt={alt}
          src={src}
          layout="intrinsic"
        />
      </FadeIn>
    </Box>
  )
}
