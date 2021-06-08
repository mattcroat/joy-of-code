import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type MenuToggleProps = {
  open: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

type PathProps = {
  color: string
  [key: string]: any
}

function Path({ color, ...props }: PathProps) {
  return (
    <motion.path
      fill="transparent"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  )
}

export function MenuToggle({ open, toggle }: MenuToggleProps) {
  const menuBackground = useColorModeValue('white', 'gray.700')
  const strokeColor = useColorModeValue('#1a202c', '#edf2f7')

  return (
    <Box
      aria-label="Menu"
      as="button"
      bg={menuBackground}
      borderRadius="50%"
      bottom={3}
      boxShadow="md"
      left={3}
      onClick={() => toggle(!open)}
      p={5}
      pointerEvents="auto"
      pos="fixed"
    >
      <svg height="23" viewBox="0 0 23 23" width="23">
        <Path
          color={strokeColor}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          color={strokeColor}
          d="M 2 9.423 L 20 9.423"
          transition={{ duration: 0.1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          color={strokeColor}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Box>
  )
}
