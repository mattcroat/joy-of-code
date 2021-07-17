import { Box, Button, useColorModeValue } from '@chakra-ui/react'

import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'

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
  )
}
