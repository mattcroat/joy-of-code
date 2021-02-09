import { Box } from '@chakra-ui/react'

interface Props {
  height: string
  src: string
  title: string
}

export function Iframe({ height = '600px', src, title }: Props) {
  return (
    <Box
      as="iframe"
      h={height}
      w={{ base: '100%', xl: '120%' }}
      mx={{ xl: '-10%' }}
      my={{ sm: 8 }}
      title={title}
      src={src}
      bg="white"
    />
  )
}
