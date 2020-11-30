import { FC } from 'react'
import { Box, List, ListItem, useColorMode } from '@chakra-ui/react'
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Slide } from '@/components/motion'
import { NextLink, ThemeToggle } from '@/components/ui'

import { bgColor, borderColor, mutedColor, primaryColor } from '@/styles/colors'

const Navigation: FC = () => {
  const { colorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
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
        bg={bgColor[colorMode]}
        boxShadow="lg"
        borderRight="2px"
        borderColor={borderColor[colorMode]}
        display={{ base: 'none', sm: 'block' }}
      >
        <List h="100%" d="flex" flexDir="column" alignItems="center">
          <ListItem my={8}>
            <NextLink href="/" color={primaryColor[colorMode]}>
              <FontAwesomeIcon icon={faBrush} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink
              href="/category/javascript"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
            >
              <FontAwesomeIcon icon={faJs} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink
              href="/category/react"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
            >
              <FontAwesomeIcon icon={faReact} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt={8}>
            <NextLink
              href="/category/web"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
            >
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </NextLink>
          </ListItem>

          <ListItem mt="auto" mb={8}>
            <ThemeToggle />
          </ListItem>
        </List>
      </Box>
    </Slide>
  )
}

export default Navigation
