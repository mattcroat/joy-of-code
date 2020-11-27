import { FC } from 'react'
import { Heading as ChakraHeading } from '@chakra-ui/react'

import { Divider } from '@/components/ui'

interface Props {
  children: React.ReactNode
  withDivider?: boolean
}

export const HeadingPrimary: FC<Props> = ({ children, withDivider }) => (
  <>
    <ChakraHeading
      as="h1"
      maxW="480px"
      fontSize={['4xl', '5xl']}
      color="gray.400"
      lineHeight="normal"
      letterSpacing="-1px"
    >
      {children}
    </ChakraHeading>
    {withDivider && <Divider />}
  </>
)

export default HeadingPrimary
