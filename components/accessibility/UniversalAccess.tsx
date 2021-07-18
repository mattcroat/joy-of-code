import { Box, Button, useColorModeValue } from '@chakra-ui/react'

import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'
import { Popover } from '@/root/components/shared/Popover'
import { usePreferences } from '@/root/context/PreferencesProvider'

export function UniversalAccess() {
  const { accessibleFont, setAccessibleFont } = usePreferences()

  return (
    <Box>
      <Button
        _hover={{
          transition: 'color .5s ease',
          color: useColorModeValue('blue.600', 'orange.200'),
        }}
        bg="none"
        color={useColorModeValue('gray.600', 'gray.400')}
        onClick={() => setAccessibleFont(!accessibleFont)}
        p={0}
      >
        <Box d="block">
          <Delight>
            <Icon icon="universalAccess" />
          </Delight>
        </Box>
      </Button>
      <Popover isOpen={true}>
        <Box as="p" fontSize="lg" fontWeight="700" mb={2}>
          Accessibility
        </Box>
        <hr />
        <Box as="p" mt={4}>
          If you have difficulty reading try using a font for dyslexia.
        </Box>
      </Popover>
    </Box>
  )
}
