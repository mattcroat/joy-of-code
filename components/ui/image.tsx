import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

import { FadeIn } from '@/components/motion'

interface Props {
  height: string
  width: string
  src: string
  alt: string
  inline: boolean
}

export function Image({ height, width, src, alt, inline = false }: Props) {
  if (inline) {
    return (
      <Box position="relative" my={{ sm: 8 }} bg="white">
        <FadeIn>
          <NextImage
            height={height}
            width={width}
            alt={alt}
            src={src}
            objectFit="contain"
            layout="intrinsic"
          />
        </FadeIn>
      </Box>
    )
  }

  return (
    <Box position="relative" mx={{ xl: '-10%' }} my={{ sm: 8 }}>
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
