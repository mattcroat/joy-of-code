import React from 'react'
import { Box, SimpleGrid, useColorMode } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

import {
  menuBg,
  menuText,
  menuTextBorder,
  mutedColor,
  primaryColor,
} from '@/root/styles/colors'

import { MenuToggle } from './MenuToggle'

const menu = {
  open: {
    clipPath: `circle(1000px at 44px 93.8%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 44px 93.8%)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const menuItems = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      y: { stiffness: 1000, velocity: -100, delay: 0.4 },
    },
  },
  closed: {
    display: 'none',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const { colorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  return (
    <MotionBox
      as="nav"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      display={{ base: 'block', md: 'none' }}
      pos="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      pointerEvents="none"
      zIndex={1}
    >
      <MotionBox
        variants={menu}
        w="100%"
        pos="absolute"
        top={0}
        left={0}
        bottom={0}
        bg={menuBg[colorMode]}
        zIndex={2}
      />
      <MotionBox
        h="100%"
        w="100%"
        variants={menuItems}
        pos="absolute"
        top={0}
        p={6}
        color={mutedColor[colorMode]}
        pointerEvents="auto"
        zIndex={2}
      >
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
        <SimpleGrid columns={2} spacing={8} mt={8}>
          <Box role="group">
            <CustomLink href="/css" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="swatch" />
                <Box
                  as="span"
                  color={menuText[colorMode]}
                  _groupHover={hoverStyle}
                >
                  CSS
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink href="/general" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="bulb" />
                <Box
                  as="span"
                  color={menuText[colorMode]}
                  _groupHover={hoverStyle}
                >
                  General
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink href="/design" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="figma" />
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
                <Icon icon="github" />
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
            <CustomLink href="/javascript" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="js" />
                <Box
                  as="span"
                  color={menuText[colorMode]}
                  _groupHover={hoverStyle}
                >
                  JavaScript
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink href="/nextjs" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="nextjs" />
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
            <CustomLink href="/react" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="react" />
                <Box
                  as="span"
                  color={menuText[colorMode]}
                  _groupHover={hoverStyle}
                >
                  React
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink href="/typescript" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="typescript" />
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
        <SimpleGrid columns={2} spacing={8} mt={8}>
          <Box role="group">
            <CustomLink href="/newsletter" hover={hoverStyle} isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="newsletter" />
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
                <Icon icon="feed" />
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
          <Box role="group">
            <Box hover={hoverStyle}>
              <ThemeToggle />
              <Box
                as="span"
                d="inline-block"
                ml={2}
                color={menuText[colorMode]}
                _groupHover={hoverStyle}
              >
                Theme
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </MotionBox>
      <MenuToggle open={isOpen} toggle={setIsOpen} />
    </MotionBox>
  )
}
