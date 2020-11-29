import { FC } from 'react'
import { Heading as ChakraHeading, useColorMode } from '@chakra-ui/react'

import { Divider } from '@/components/ui'

import { mutedColor } from '@/styles/colors'

interface Props {
  children: React.ReactNode
  withDivider?: boolean
}

export const HeadingPrimary: FC<Props> = ({ children, withDivider }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <ChakraHeading
        as="h1"
        maxW="480px"
        fontSize={['4xl', '5xl']}
        color={mutedColor[colorMode]}
        lineHeight="normal"
        letterSpacing="-1px"
      >
        {children}
      </ChakraHeading>
      {withDivider && <Divider />}
    </>
  )
}

export default HeadingPrimary
