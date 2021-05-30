import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { MenuToggle } from './MenuToggle'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

const menuVariants = {
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

const menuItemsVariants = {
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
  const router = useRouter()

  const menuBackground = useColorModeValue('white', 'gray.700')
  const menuTextBorderColor = useColorModeValue('gray.200', 'gray.600')
  const menuTextColor = useColorModeValue('gray.800', 'gray.100')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const primaryColor = useColorModeValue('blue.600', 'orange.200')

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor,
  }

  React.useEffect(() => {
    if (!isOpen) return

    const handleRouteChange = () => setIsOpen(!isOpen)

    router.events.on('routeChangeComplete', handleRouteChange)

    return function cleanup() {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen, router.events])

  return (
    <MotionBox
      animate={isOpen ? 'open' : 'closed'}
      as="nav"
      bottom={0}
      display={{ base: 'block', md: 'none' }}
      initial={false}
      left={0}
      pointerEvents="none"
      pos="fixed"
      right={0}
      top={0}
      zIndex={3}
    >
      <MotionBox
        bg={menuBackground}
        bottom={0}
        left={0}
        pos="absolute"
        top={0}
        variants={menuVariants}
        w="100%"
      />
      <MotionBox
        color={mutedColor}
        h="100%"
        p={6}
        pointerEvents="auto"
        pos="absolute"
        top={0}
        variants={menuItemsVariants}
        w="100%"
      >
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
        <SimpleGrid columns={2} mt={8} spacing={8}>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/css" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="swatch" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  CSS
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/general" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="bulb" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  General
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/design" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="figma" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  Figma
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/git" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="github" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  Git / GitHub
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/javascript" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="javascript" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  JavaScript
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/next" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="next" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  Next.js
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/react" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="react" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  React
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/typescript" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="typescript" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  TypeScript
                </Box>
              </Box>
            </CustomLink>
          </Box>
        </SimpleGrid>

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
        <SimpleGrid columns={2} mt={8} spacing={8}>
          <Box role="group">
            <CustomLink hover={hoverStyle} href="/newsletter" isInternal>
              <Box d="flex" gridGap={4}>
                <Icon icon="newsletter" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
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
                <Icon icon="feed" />
                <Box _groupHover={hoverStyle} as="span" color={menuTextColor}>
                  RSS Feed
                </Box>
              </Box>
            </CustomLink>
          </Box>
          <Box role="group">
            <Box hover={hoverStyle}>
              <ThemeToggle />
              <Box
                _groupHover={hoverStyle}
                as="span"
                color={menuTextColor}
                d="inline-block"
                ml={2}
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
