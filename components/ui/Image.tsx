import { FC } from 'react'
import { Box as ChakraBox } from '@chakra-ui/react'

interface Props {
  alt: string
  src: string
}

const Image: FC<Props> = ({ alt, src }) => (
  // should probably use https://github.com/remarkjs/remark-unwrap-images
  // and use next/image
  <ChakraBox as="span" d="block" mx={{ xl: '-24' }}>
    <img alt={alt} src={src} />
  </ChakraBox>
)

export default Image
