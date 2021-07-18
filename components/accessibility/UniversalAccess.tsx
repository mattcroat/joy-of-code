import { Box, Button, useColorModeValue } from '@chakra-ui/react'

import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'
import { Popover } from '@/root/components/shared/Popover'

import type { Dispatch, SetStateAction } from 'react'

interface UniversalAccessProps {
  accessibleFont: boolean
  setAccessibleFont: Dispatch<SetStateAction<boolean>>
}

export function UniversalAccess({
  accessibleFont,
  setAccessibleFont,
}: UniversalAccessProps) {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  const hoverStyle = {
    transition: 'color .5s ease',
    color: useColorModeValue('blue.600', 'orange.200'),
  }

  return (
    <Box>
      <Button
        _hover={hoverStyle}
        bg="none"
        color={mutedColor}
        disabled={true}
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
          Accessibility (Coming)
        </Box>
        <hr />
        <Box as="p" mt={4}>
          If you have difficulty reading try using a font for dyslexia.
        </Box>
      </Popover>
    </Box>
  )
}
