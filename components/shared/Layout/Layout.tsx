import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { MotionBox } from '@/root/components/shared/MotionBox'
import { Seo } from '@/root/components/shared/Layout/Seo'

interface LayoutProps {
  children: ReactNode
  [key: string]: any
}

const layoutVariants = {
  hidden: { y: -50 },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Layout({ children, ...metadata }: LayoutProps) {
  return (
    <Box maxW={{ sm: '80%' }} mx="auto" px={{ base: 4, sm: 0 }}>
      <Seo {...metadata} />
      <Box
        as="main"
        ml={{ md: '80px' }}
        pt={6}
        transition="background-color 2s"
      >
        <MotionBox animate="visible" initial="hidden" variants={layoutVariants}>
          {children}
        </MotionBox>
      </Box>
    </Box>
  )
}
