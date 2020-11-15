import {
  Box,
  Heading,
  IconButton,
  List,
  ListItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faBrush, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.900')
  const primaryColor = 'orange.200'
  const mutedColor = 'gray.600'

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
        <Heading my={8}>
          <Box color={primaryColor}>
            <FontAwesomeIcon icon={faBrush} size="sm" />
          </Box>
        </Heading>
        <ListItem mt={8}>
          <Box color={mutedColor} _hover={hoverStyle}>
            <FontAwesomeIcon icon={faReact} size="2x" />
          </Box>
        </ListItem>
        <ListItem mt={8}>
          <Box color={mutedColor} _hover={hoverStyle}>
            <FontAwesomeIcon icon={faJs} size="2x" />
          </Box>
        </ListItem>
        <ListItem mt={8}>
          <Box color={mutedColor} _hover={hoverStyle}>
            <FontAwesomeIcon icon={faHtml5} size="2x" />
          </Box>
        </ListItem>
        <ListItem mt={8}>
          <Box color={mutedColor} _hover={hoverStyle}>
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
          </Box>
        </ListItem>
        <ListItem mt="auto" mb={8}>
          <Box color={mutedColor} _hover={hoverStyle}>
            <IconButton
              aria-label="Toggle dark mode"
              bg={bgColor}
              icon={
                colorMode === 'dark' ? (
                  <FontAwesomeIcon icon={faSun} size="2x" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} size="2x" />
                )
              }
              onClick={toggleColorMode}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  )
}

export default Navigation
