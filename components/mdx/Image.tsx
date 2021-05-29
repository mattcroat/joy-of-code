import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

interface ImageProps {
  height?: number
  width?: number
  src: string
  alt: string
  inline?: boolean
}

export function Image({
  height = 300,
  width = 1000,
  src,
  alt,
  inline = false,
}: ImageProps) {
  if (inline) {
    return (
      <Box my={{ sm: 8 }}>
        <NextImage
          alt={alt}
          height={height}
          layout="intrinsic"
          src={src}
          width={width}
        />
      </Box>
    )
  }

  return (
    <Box mx={{ xl: '-10%' }} my={{ sm: 8 }} textAlign="center">
      <NextImage
        alt={alt}
        height={height}
        layout="intrinsic"
        src={src}
        width={width}
      />
    </Box>
  )
}
