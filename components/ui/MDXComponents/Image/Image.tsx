import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

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
