import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBrush, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLink from 'next/link'

const Navigation = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.900')
  const primaryColor = 'orange.200'
  const mutedColor = 'gray.400'

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor,
  }

  return (
    <Box
      as="nav"
      h="100vh"
      maxW="80px"
      minW="80px"
      pos="fixed"
      top={0}
      left={0}
      px={4}
      bg={bgColor}
      boxShadow="lg"
      borderRight="2px"
      borderColor={borderColor}
    >
      <List h="100%" d="flex" flexDir="column" alignItems="center">
        <ListItem my={8}>
          <NextLink href="/" passHref>
            <Link color={primaryColor}>
              <FontAwesomeIcon icon={faBrush} size="2x" />
            </Link>
          </NextLink>
        </ListItem>

        <ListItem mt={8}>
          <NextLink href="/html-css" passHref>
            <Link color={mutedColor} _hover={hoverStyle}>
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </Link>
          </NextLink>
        </ListItem>

        <ListItem mt={8}>
          <NextLink href="/react" passHref>
            <Link color={mutedColor} _hover={hoverStyle}>
              <FontAwesomeIcon icon={faReact} size="2x" />
            </Link>
          </NextLink>
        </ListItem>

        <ListItem mt={8}>
          <NextLink href="/javascript" passHref>
            <Link color={mutedColor} _hover={hoverStyle}>
              <FontAwesomeIcon icon={faJs} size="2x" />
            </Link>
          </NextLink>
        </ListItem>

        <ListItem mt="auto" mb={8}>
          <IconButton
            _hover={hoverStyle}
            aria-label="Toggle dark mode"
            bg={bgColor}
            color={mutedColor}
            icon={
              colorMode === 'dark' ? (
                <FontAwesomeIcon icon={faSun} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faMoon} size="2x" />
              )
            }
            onClick={toggleColorMode}
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default Navigation
