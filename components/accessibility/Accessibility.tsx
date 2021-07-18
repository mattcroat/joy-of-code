import { Box, useColorModeValue } from '@chakra-ui/react'

import { ChangeTheme } from './ChangeTheme'
import { UniversalAccess } from './UniversalAccess'

export function Accessibility() {
  return (
    <Box
      alignItems="center"
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="full"
      boxShadow="base"
      d="flex"
      gridGap={2}
      pos="fixed"
      px={4}
      py={2}
      right={4}
      top={4}
      zIndex={3}
    >
      <UniversalAccess />
      <ChangeTheme />
    </Box>
  )
}
