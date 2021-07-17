import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react'

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
    <Popover defaultIsOpen={true}>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Accessibility (Coming)</PopoverHeader>
        <PopoverBody>
          <span>
            If you have difficulty reading try using a font for dyslexia.
          </span>
          <Box as="span" color="gray.400" d="block" mt={4}>
            {`Tap anywhere on the page to close the pop-up. 👋`}
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
