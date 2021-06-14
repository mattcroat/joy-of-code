import {
  Box,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

const menuVariants = {
  hover: { display: 'block', opacity: 1 },
  hidden: { display: 'none', opacity: 0 },
}

export function NavigationSidebar() {
  const menuArrowColor = useColorModeValue('gray.200', 'gray.700')
  const menuBackground = useColorModeValue('white', 'gray.700')
  const menuBorderColor = useColorModeValue('gray.200', 'gray.700')
  const menuTextBorderColor = useColorModeValue('gray.200', 'gray.600')
  const menuTextColor = useColorModeValue('gray.800', 'gray.100')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const primaryColor = useColorModeValue('blue.600', 'orange.200')
  const sidebarBackground = useColorModeValue('white', 'gray.800')

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor,
  }

  return (
    <>
      <Box
        as="nav"
        bg={sidebarBackground}
        boxShadow="md"
        display={{ base: 'none', md: 'block' }}
        h="100vh"
        left={0}
        maxW="80px"
        minW="80px"
        pos="fixed"
        top={0}
        zIndex={3}
      >
        <List alignItems="center" d="flex" flexDir="column" h="100%">
          <ListItem my={8}>
            <CustomLink color={primaryColor} href="/" isInternal>
              <VisuallyHidden>Home</VisuallyHidden>
              <Delight>
                <Icon icon="paintBrush" />
              </Delight>
            </CustomLink>
          </ListItem>

          <ListItem mt={8}>
            <CustomLink
              color={mutedColor}
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
              color={mutedColor}
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
              color={mutedColor}
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
              color={mutedColor}
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

          <ListItem color={mutedColor} mt={8} pos="relative">
            <VisuallyHidden>More</VisuallyHidden>
            <MotionBox
              _focus={{
                boxShadow: 'var(--chakra-shadows-outline)',
                transition: 'all 0.15s ease-out',
              }}
              borderRadius="base"
              initial="hidden"
              outline="none"
              tabIndex={0}
              whileHover="hover"
            >
              <Box _hover={hoverStyle}>
                <Icon icon="more" />
              </Box>
              <MotionBox
                _before={{
                  content: '""',
                  pos: 'absolute',
                  top: 0,
                  h: '100%',
                  w: '100%',
                  transform: 'translateX(-14%)',
                  zIndex: -1,
                }}
                bg={menuBackground}
                border="1px solid"
                borderColor={menuBorderColor}
                borderRadius="base"
                boxShadow="lg"
                fontSize="lg"
                left={20}
                pos="absolute"
                px={8}
                py={6}
                style={{ transform: 'translateY(-50%)' }}
                variants={menuVariants}
                w="max-content"
              >
                <Box
                  alignItems="center"
                  color={menuArrowColor}
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
                    borderColor={menuTextBorderColor}
                    color={primaryColor}
                    d="block"
                    fontSize="2xl"
                    fontWeight={600}
                    py={2}
                  >
                    Categories
                  </Box>
                  <SimpleGrid columns={3} mt={8} spacing={8}>
                    <Box role="group">
                      <CustomLink hover={hoverStyle} href="/design" isInternal>
                        <Box d="flex" gridGap={4}>
                          <Delight>
                            <Icon icon="figma" />
                          </Delight>
                          <Box
                            _groupHover={hoverStyle}
                            as="span"
                            color={menuTextColor}
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
                            color={menuTextColor}
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
                            color={menuTextColor}
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
                            color={menuTextColor}
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
                    borderColor={menuTextBorderColor}
                    color={primaryColor}
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
                            color={menuTextColor}
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
                            color={menuTextColor}
                          >
                            RSS Feed
                          </Box>
                        </Box>
                      </CustomLink>
                    </Box>
                  </SimpleGrid>
                </Box>
              </MotionBox>
            </MotionBox>
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
