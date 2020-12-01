import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

interface Props {
  alt: string
  src: string
}

const Image: FC<Props> = ({ alt, src }) => (
  <Box
    position="relative"
    h={{ base: '400px', lg: '600px' }}
    w={{ xl: '140%' }}
    mx={{ xl: '-20%' }}
    my={{ sm: 8 }}
  >
    <NextImage alt={alt} src={src} layout="fill" objectFit="contain" />
  </Box>
)

export default Image
