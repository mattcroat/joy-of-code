import { Box, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ChangeTheme } from './ChangeTheme'
import { UniversalAccess } from './UniversalAccess'

export function Accessibility() {
  const [accessibleFont, setAccessibleFont] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('accessibleFont')) {
        return true
      }
    }

    return false
  })

  useEffect(() => {
    const storage = window.localStorage
    const serialize = JSON.stringify

    if (accessibleFont) {
      storage.setItem('accessibleFont', serialize(true))
    } else {
      storage.removeItem('accessibleFont')
    }
  }, [accessibleFont])

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
      <UniversalAccess
        accessibleFont={accessibleFont}
        setAccessibleFont={setAccessibleFont}
      />
      <ChangeTheme />
    </Box>
  )
}
