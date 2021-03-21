import { Box, List, ListItem, useColorMode } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import {
  bgColor,
  borderColor,
  mutedColor,
  primaryColor,
} from '@/root/styles/colors'

export function Navigation() {
  const { colorMode } = useColorMode()

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
          <ListItem my={8}>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <Delight>
                <Icon icon="paintBrush" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              href="/javascript"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="js" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              href="/react"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="react" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              href="/css"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="swatch" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              href="/general"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="bulb" />
              </Delight>
            </CustomLink>
          </ListItem>

          <Box mt="auto" mb={8}>
            <ListItem>
              <CustomLink
                href="/feed/rss.xml"
                color={mutedColor[colorMode]}
                hover={hoverStyle}
                isInternal
                openSeparateTab
              >
                <Delight>
                  <Icon icon="feed" />
                </Delight>
              </CustomLink>
            </ListItem>

            <ListItem mt={8}>
              <Delight>
                <ThemeToggle />
              </Delight>
            </ListItem>
          </Box>
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
          <ListItem>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <Delight>
                <Icon icon="paintBrush" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink
              href="/javascript"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="js" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink
              href="/react"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="react" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink
              href="/css"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="swatch" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink
              href="/general"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
            >
              <Delight>
                <Icon icon="bulb" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink
              href="/feed/rss.xml"
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              isInternal
              openSeparateTab
            >
              <Delight>
                <Icon icon="feed" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem>
            <Delight>
              <ThemeToggle />
            </Delight>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
