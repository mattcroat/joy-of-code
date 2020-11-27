import { FC } from 'react'
import {
  Box,
  IconButton,
  List,
  ListItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBrush, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Slide } from '@/components/motion'
import { NextLink } from '@/components/ui'

const Navigation: FC = () => {
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
    <Slide right>
      <Box
        as="nav"
        h="100vh"
        maxW="80px"
        minW="80px"
        pos="fixed"
        top={0}
        left={0}
        bg={bgColor}
        boxShadow="lg"
        borderRight="2px"
        borderColor={borderColor}
        display={{ base: 'none', lg: 'block' }}
      >
        <List h="100%" d="flex" flexDir="column" alignItems="center">
          <ListItem my={8}>
            <NextLink href="/" color={primaryColor}>
              <FontAwesomeIcon icon={faBrush} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink href="/javascript" color={mutedColor} hover={hoverStyle}>
              <FontAwesomeIcon icon={faJs} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink href="/react" color={mutedColor} hover={hoverStyle}>
              <FontAwesomeIcon icon={faReact} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink href="/web" color={mutedColor} hover={hoverStyle}>
              <FontAwesomeIcon icon={faHtml5} size="2x" />
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
    </Slide>
  )
}

export default Navigation
