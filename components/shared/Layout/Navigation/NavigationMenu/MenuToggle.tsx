import { Box, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { menuBg, menuToggleColor } from '@/root/styles/colors'

type MenuToggleProps = {
  open: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

function Path(props: any) {
  const { colorMode } = useColorMode()

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={menuToggleColor[colorMode]}
      strokeLinecap="round"
      {...props}
    />
  )
}

export function MenuToggle({ open, toggle }: MenuToggleProps) {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="button"
      onClick={() => toggle(!open)}
      pos="fixed"
      left={3}
      bottom={3}
      p={5}
      bg={menuBg[colorMode]}
      borderRadius="50%"
      boxShadow="md"
      pointerEvents="auto"
      zIndex={3}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Box>
  )
}
