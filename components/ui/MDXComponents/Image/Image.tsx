import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

interface Props {
  height?: number
  width?: number
  src: string
  alt: string
  inline?: boolean
  banner?: boolean
  gif?: boolean
}

export function Image({
  height = 300,
  width = 1000,
  src,
  alt,
  inline = false,
  banner = false,
  gif = false,
}: Props) {
  if (inline) {
    return (
      <Box my={{ sm: 8 }}>
        <NextImage
          height={height}
          width={width}
          alt={alt}
          src={src}
          layout="intrinsic"
        />
      </Box>
    )
  }

  if (banner) {
    return (
      <Box my={{ sm: 8 }} bg="white">
        <NextImage
          height={height}
          width={width}
          alt={alt}
          src={src}
          objectFit="contain"
          layout="intrinsic"
        />
      </Box>
    )
  }

  if (gif) {
    return (
      <Box my={{ sm: 8 }}>
        <NextImage
          height={height}
          width={width}
          alt={alt}
          src={src}
          objectFit="cover"
          layout="intrinsic"
        />
      </Box>
    )
  }

  return (
    <Box mx={{ xl: '-10%' }} my={{ sm: 8 }}>
      <NextImage
        height={height}
        width={width}
        alt={alt}
        src={src}
        layout="intrinsic"
      />
    </Box>
  )
}
