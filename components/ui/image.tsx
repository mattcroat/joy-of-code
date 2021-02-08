import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

import { FadeIn } from '@/components/motion'

interface Props {
  height: string
  width: string
  src: string
  alt: string
  inline: boolean
  banner: boolean
}

export function Image({
  height,
  width,
  src,
  alt,
  inline = false,
  banner = false,
}: Props) {
  if (banner) {
    return (
      <Box my={{ sm: 8 }} bg="white">
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

  if (inline) {
    return (
      <Box my={{ sm: 8 }}>
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

  return (
    <Box mx={{ xl: '-10%' }} my={{ sm: 8 }}>
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
