import { FC } from 'react'
import { Heading as ChakraHeading, useColorMode } from '@chakra-ui/react'

import { Divider } from '@/components/ui'

import { primaryColor } from '@/styles/colors'

interface Props {
  children: React.ReactNode
  withDivider?: boolean
}

const HeadingSecondary: FC<Props> = ({ children, withDivider }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <ChakraHeading
        as="h2"
        maxW="480px"
        fontSize={['3xl', '4xl']}
        color={primaryColor[colorMode]}
        letterSpacing="-1px"
      >
        {children}
      </ChakraHeading>
      {withDivider && <Divider />}
    </>
  )
}

export default HeadingSecondary
