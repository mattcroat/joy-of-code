import {
  Box,
  List,
  ListItem,
  SimpleGrid,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'
import {
  bgColor,
  borderColor,
  menuArrow,
  menuBg,
  menuBorder,
  menuText,
  menuTextBorder,
  mutedColor,
  primaryColor,
} from '@/root/styles/colors'

import { motion } from 'framer-motion'

const variants = {
  menu: {
    hover: { display: 'block', opacity: 1 },
    hidden: { display: 'none', opacity: 0 },
  },
}

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
        zIndex={3}
      >
        <List h="100%" d="flex" flexDir="column" alignItems="center">
          <ListItem my={8}>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <VisuallyHidden>Home</VisuallyHidden>
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
              <VisuallyHidden>JavaScript</VisuallyHidden>
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
              <VisuallyHidden>React</VisuallyHidden>
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
              <VisuallyHidden>CSS</VisuallyHidden>
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
              <VisuallyHidden>General</VisuallyHidden>
              <Delight>
                <Icon icon="bulb" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8} pos="relative" color={mutedColor[colorMode]}>
            <motion.div whileHover="hover">
              <VisuallyHidden>More</VisuallyHidden>
              <Box _hover={hoverStyle}>
                <Icon icon="more" />
              </Box>
              <motion.div initial="hidden" variants={variants.menu}>
                <Box
                  w="max-content"
                  pos="absolute"
                  left={20}
                  px={8}
                  py={6}
                  fontSize="lg"
                  bg={menuBg[colorMode]}
                  border="1px solid"
                  borderColor={menuBorder[colorMode]}
                  borderRadius="base"
                  boxShadow="lg"
                  style={{ transform: 'translateY(-50%)' }}
                  _before={{
                    content: '""',
                    pos: 'absolute',
                    top: 0,
                    h: '100%',
                    w: '100%',
                    transform: 'translateX(-14%)',
                    zIndex: -1,
                  }}
                >
                  <Box
                    d="flex"
                    alignItems="center"
                    height="100%"
                    pos="absolute"
                    top={0}
                    left={0}
                    color={menuArrow[colorMode]}
                    style={{ transform: 'translateX(-74%) translateY(-5%)' }}
                  >
                    <svg
                      height="40"
                      width="40"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      <path d="M9 0l8.66 15H.34L9 0z" />
                    </svg>
                  </Box>

                  <Box>
                    <Box
                      as="span"
                      d="block"
                      py={2}
                      fontSize="2xl"
                      color={primaryColor[colorMode]}
                      fontWeight={600}
                      borderBottom="1px solid"
                      borderColor={menuTextBorder[colorMode]}
                    >
                      Categories
                    </Box>
                    <SimpleGrid columns={3} spacing={8} mt={8}>
                      <Box role="group">
                        <CustomLink
                          href="/design"
                          hover={hoverStyle}
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="figma" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              Figma
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink href="/git" hover={hoverStyle} isInternal>
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="github" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              Git / GitHub
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink
                          href="/nextjs"
                          hover={hoverStyle}
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="nextjs" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              Next.js
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink
                          href="/typescript"
                          hover={hoverStyle}
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="typescript" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              TypeScript
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                    </SimpleGrid>
                  </Box>

                  <Box>
                    <Box
                      as="span"
                      d="block"
                      mt={8}
                      py={2}
                      color={primaryColor[colorMode]}
                      fontSize="2xl"
                      fontWeight={600}
                      borderBottom="1px solid"
                      borderColor={menuTextBorder[colorMode]}
                    >
                      Subscribe
                    </Box>
                    <SimpleGrid columns={3} spacing={8} mt={8}>
                      <Box role="group">
                        <CustomLink
                          href="/newsletter"
                          hover={hoverStyle}
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="newsletter" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              Newsletter
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink
                          href="/feed/rss.xml"
                          hover={hoverStyle}
                          isInternal
                          openSeparateTab
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="feed" />
                            </Delight>
                            <Box
                              as="span"
                              color={menuText[colorMode]}
                              _groupHover={hoverStyle}
                            >
                              RSS Feed
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </ListItem>

          <ListItem mt="auto" mb={8}>
            <Box mt={8}>
              <Delight>
                <ThemeToggle />
              </Delight>
            </Box>
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
        zIndex="3"
        style={{
          boxShadow: '0 -10px 10px hsla(0, 0%, 0%, 40%)',
        }}
      >
        <List d="flex" justifyContent="space-around" alignItems="center">
          <ListItem>
            <CustomLink href="/" color={primaryColor[colorMode]} isInternal>
              <VisuallyHidden>Home</VisuallyHidden>
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
              <VisuallyHidden>JavaScript</VisuallyHidden>
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
              <VisuallyHidden>React</VisuallyHidden>
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
              <VisuallyHidden>CSS</VisuallyHidden>
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
              <VisuallyHidden>General</VisuallyHidden>
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
              <VisuallyHidden>RSS feed</VisuallyHidden>
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
