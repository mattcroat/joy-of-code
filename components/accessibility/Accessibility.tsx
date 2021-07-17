import { Box, useColorModeValue } from '@chakra-ui/react'

import { useLocalStorage } from '@/root/hooks/useLocalStorage'

import { ChangeTheme } from './ChangeTheme'
import { UniversalAccess } from './UniversalAccess'

export function Accessibility() {
  const [accessibleFont, setAccessibleFont] = useLocalStorage(
    'accessibleFont',
    true
  )
  const accessibilityBg = useColorModeValue('white', 'gray.700')

  return (
    <Box
      alignItems="center"
      bg={accessibilityBg}
      borderRadius="full"
      boxShadow="base"
      d="flex"
      gridGap={2}
      pos="fixed"
      px={4}
      py={2}
      right={4}
      top={4}
    >
      <UniversalAccess
        accessibleFont={accessibleFont}
        setAccessibleFont={setAccessibleFont}
      />
      <ChangeTheme />
    </Box>
  )
}
