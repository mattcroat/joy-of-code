import { Box } from '@chakra-ui/react'

import { Slide } from '@/components/motion'

interface Props {
  src: string
  title: string
}

export function Iframe({ src, title }: Props) {
  return (
    <Slide>
      <Box
        as="iframe"
        height="600px"
        w={{ base: '100%', xl: '120%' }}
        mx={{ xl: '-10%' }}
        my={{ sm: 8 }}
        title={title}
        src={src}
      />
    </Slide>
  )
}
