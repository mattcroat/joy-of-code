import { Link as ChakraLink } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
  href: string
}

const Link: React.FC<Props> = ({ children, href }) => (
  <ChakraLink
    color="orange.200"
    href={href}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </ChakraLink>
)

export default Link
