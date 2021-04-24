import { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { Seo } from '@/root/components/shared/Layout/Seo'
import { slide } from '@/root/utils/helpers/variants'
import { Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  [key: string]: any
}

export function Layout({ children, ...metadata }: Props) {
  return (
    <Box maxW={{ sm: '80%' }} mx="auto" px={{ base: 8, sm: 0 }}>
      <Seo {...metadata} />
      <Box
        as="main"
        ml={{ md: '80px' }}
        pt={6}
        transition="background-color 2s"
      >
        <motion.div initial="hidden" animate="visible" variants={slide}>
          {children}
        </motion.div>
      </Box>
    </Box>
  )
}
