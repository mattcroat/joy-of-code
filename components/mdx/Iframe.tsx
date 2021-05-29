import { Box } from '@chakra-ui/react'

interface IframeProps {
  height: string
  src: string
  title: string
}

export function Iframe({ height = '600px', src, title }: IframeProps) {
  return (
    <Box
      as="iframe"
      bg="white"
      h={height}
      mx={{ xl: '-10%' }}
      my={{ sm: 8 }}
      src={src}
      title={title}
      w={{ base: '100%', xl: '120%' }}
    />
  )
}
