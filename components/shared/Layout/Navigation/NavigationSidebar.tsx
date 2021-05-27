import {
  Box,
  List,
  ListItem,
  SimpleGrid,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import {
  bgColor,
  menuArrow,
  menuBg,
  menuBorder,
  menuText,
  menuTextBorder,
  mutedColor,
  primaryColor,
} from '@/root/styles/colors'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

const variants = {
  hover: { display: 'block', opacity: 1 },
  hidden: { display: 'none', opacity: 0 },
}

export function NavigationSidebar() {
  const { colorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  return (
    <>
      <Box
        as="nav"
        bg={bgColor[colorMode]}
        boxShadow="md"
        display={{ base: 'none', md: 'block' }}
        h="100vh"
        left={0}
        maxW="80px"
        minW="80px"
        pos="fixed"
        top={0}
        transition="background-color 0.2s, border-color 0.2s"
        zIndex={3}
      >
        <List alignItems="center" d="flex" flexDir="column" h="100%">
          <ListItem my={8}>
            <CustomLink color={primaryColor[colorMode]} href="/" isInternal>
              <VisuallyHidden>Home</VisuallyHidden>
              <Delight>
                <Icon icon="paintBrush" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              href="/javascript"
              isInternal
            >
              <VisuallyHidden>JavaScript</VisuallyHidden>
              <Delight>
                <Icon icon="javascript" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              href="/react"
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
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              href="/css"
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
              color={mutedColor[colorMode]}
              hover={hoverStyle}
              href="/general"
              isInternal
            >
              <VisuallyHidden>General</VisuallyHidden>
              <Delight>
                <Icon icon="bulb" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem color={mutedColor[colorMode]} mt={8} pos="relative">
            <motion.div initial="hidden" whileHover="hover">
              <VisuallyHidden>More</VisuallyHidden>
              <Box _hover={hoverStyle}>
                <Icon icon="more" />
              </Box>
              <motion.div variants={variants}>
                <Box
                  _before={{
                    content: '""',
                    pos: 'absolute',
                    top: 0,
                    h: '100%',
                    w: '100%',
                    transform: 'translateX(-14%)',
                    zIndex: -1,
                  }}
                  bg={menuBg[colorMode]}
                  border="1px solid"
                  borderColor={menuBorder[colorMode]}
                  borderRadius="base"
                  boxShadow="lg"
                  fontSize="lg"
                  left={20}
                  pos="absolute"
                  px={8}
                  py={6}
                  style={{ transform: 'translateY(-50%)' }}
                  w="max-content"
                >
                  <Box
                    alignItems="center"
                    color={menuArrow[colorMode]}
                    d="flex"
                    height="100%"
                    left={0}
                    pos="absolute"
                    style={{ transform: 'translateX(-74%) translateY(-5%)' }}
                    top={0}
                  >
                    <svg
                      fill="currentColor"
                      height="40"
                      style={{ transform: 'rotate(-90deg)' }}
                      viewBox="0 0 20 20"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 0l8.66 15H.34L9 0z" />
                    </svg>
                  </Box>

                  <Box>
                    <Box
                      as="span"
                      borderBottom="1px solid"
                      borderColor={menuTextBorder[colorMode]}
                      color={primaryColor[colorMode]}
                      d="block"
                      fontSize="2xl"
                      fontWeight={600}
                      py={2}
                    >
                      Categories
                    </Box>
                    <SimpleGrid columns={3} mt={8} spacing={8}>
                      <Box role="group">
                        <CustomLink
                          hover={hoverStyle}
                          href="/design"
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="figma" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
                            >
                              Figma
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink hover={hoverStyle} href="/git" isInternal>
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="github" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
                            >
                              Git / GitHub
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink hover={hoverStyle} href="/next" isInternal>
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="next" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
                            >
                              Next.js
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink
                          hover={hoverStyle}
                          href="/typescript"
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="typescript" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
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
                      borderBottom="1px solid"
                      borderColor={menuTextBorder[colorMode]}
                      color={primaryColor[colorMode]}
                      d="block"
                      fontSize="2xl"
                      fontWeight={600}
                      mt={8}
                      py={2}
                    >
                      Subscribe
                    </Box>
                    <SimpleGrid columns={3} mt={8} spacing={8}>
                      <Box role="group">
                        <CustomLink
                          hover={hoverStyle}
                          href="/newsletter"
                          isInternal
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="newsletter" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
                            >
                              Newsletter
                            </Box>
                          </Box>
                        </CustomLink>
                      </Box>
                      <Box role="group">
                        <CustomLink
                          hover={hoverStyle}
                          href="/feed/rss.xml"
                          isInternal
                          openSeparateTab
                        >
                          <Box d="flex" gridGap={4}>
                            <Delight>
                              <Icon icon="feed" />
                            </Delight>
                            <Box
                              _groupHover={hoverStyle}
                              as="span"
                              color={menuText[colorMode]}
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

          <ListItem mb={8} mt="auto">
            <Box mt={8}>
              <Delight>
                <ThemeToggle />
              </Delight>
            </Box>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
