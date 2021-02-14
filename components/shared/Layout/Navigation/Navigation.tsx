import { Box, List, ListItem, useColorMode } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import {
  bgColor,
  borderColor,
  mutedColor,
  primaryColor,
} from '@/root/styles/colors'
import { useSound } from '@/root/utils/hooks'

export function Navigation() {
  const { colorMode } = useColorMode()
  const playSound = useSound('/sfx/confirm.mp3')

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  return (
    <>
      <Box
        as="nav"
        h="100vh"
        maxW="80px"
        minW="80px"
        pos="fixed"
        top={0}
        left={0}
        display={{ base: 'none', md: 'block' }}
        bg={bgColor[colorMode]}
        boxShadow="lg"
        borderRight="2px"
        borderColor={borderColor[colorMode]}
        transition="background-color 0.2s, border-color 0.2s"
      >
        <List h="100%" d="flex" flexDir="column" alignItems="center">
          <ListItem onClick={playSound} my={8}>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <Icon icon="paintBrush" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound} mt={8}>
            <CustomLink
              href="/javascript"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="js" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound} mt={8}>
            <CustomLink
              href="/react"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="react" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound} mt={8}>
            <CustomLink
              href="/web"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="spider" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound} mt="auto" mb={8}>
            <ThemeToggle />
          </ListItem>
        </List>
      </Box>

      <Box
        as="nav"
        w="100%"
        pos="fixed"
        left={0}
        bottom={0}
        display={{ base: 'block', md: 'none' }}
        py={2}
        bg={bgColor[colorMode]}
        transition="background-color 0.2s, border-color 0.2s"
        zIndex="1"
        style={{
          boxShadow: '0 -10px 10px hsla(0, 0%, 0%, 40%)',
        }}
      >
        <List d="flex" justifyContent="space-around" alignItems="center">
          <ListItem onClick={playSound}>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <Icon icon="paintBrush" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound}>
            <CustomLink
              href="/javascript"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="js" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound}>
            <CustomLink
              href="/react"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="react" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound}>
            <CustomLink
              href="/web"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Icon icon="spider" />
            </CustomLink>
          </ListItem>

          <ListItem onClick={playSound}>
            <ThemeToggle />
          </ListItem>
        </List>
      </Box>
    </>
  )
}
