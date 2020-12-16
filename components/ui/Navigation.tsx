import { FC } from 'react'
import { Box, List, ListItem, useColorMode } from '@chakra-ui/react'
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CustomLink, ThemeToggle } from '@/components/ui'

import { bgColor, borderColor, mutedColor, primaryColor } from '@/styles/colors'

const Navigation: FC = () => {
  const { colorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
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
      bg={bgColor[colorMode]}
      boxShadow="lg"
      borderRight="2px"
      borderColor={borderColor[colorMode]}
      display={{ base: 'none', sm: 'block' }}
      transition="background-color 0.2s, border-color 0.2s"
    >
      <List h="100%" d="flex" flexDir="column" alignItems="center">
        <ListItem my={8}>
          <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
            <FontAwesomeIcon icon={faPaintBrush} size="2x" fixedWidth />
          </CustomLink>
        </ListItem>

        <ListItem mt={8}>
          <CustomLink
            href="/category/javascript"
            color={mutedColor[colorMode]}
            hover={hoverStyle}
            isInternal
          >
            <FontAwesomeIcon icon={faJs} size="2x" fixedWidth />
          </CustomLink>
        </ListItem>

        <ListItem mt={8}>
          <CustomLink
            href="/category/react"
            color={mutedColor[colorMode]}
            hover={hoverStyle}
            isInternal
          >
            <FontAwesomeIcon icon={faReact} size="2x" fixedWidth />
          </CustomLink>
        </ListItem>

        <ListItem mt={8}>
          <CustomLink
            href="/category/web"
            color={mutedColor[colorMode]}
            hover={hoverStyle}
            isInternal
          >
            <FontAwesomeIcon icon={faHtml5} size="2x" fixedWidth />
          </CustomLink>
        </ListItem>

        <ListItem mt="auto" mb={8}>
          <ThemeToggle />
        </ListItem>
      </List>
    </Box>
  )
}

export default Navigation
