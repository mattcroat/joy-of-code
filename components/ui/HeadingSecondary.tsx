import { Heading as ChakraHeading } from '@chakra-ui/react'

import { Divider } from '@/components/ui'

interface Props {
  children: React.ReactNode
  withDivider?: boolean
}

const HeadingSecondary: React.FC<Props> = ({ children, withDivider }) => (
  <>
    <ChakraHeading
      as="h2"
      maxW="480px"
      fontSize={['3xl', '4xl']}
      color="gray.400"
      letterSpacing="-1px"
    >
      {children}
    </ChakraHeading>
    {withDivider && <Divider />}
  </>
)

export default HeadingSecondary
