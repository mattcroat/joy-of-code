import { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'

import type { ReactNode } from 'react'

interface PopoverProps {
  children: ReactNode
  isOpen: boolean
}

export function Popover({ children, isOpen = false }: PopoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(isOpen)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function listener(event: Event) {
      const targetEl = event.target as HTMLElement

      // do nothing if clicking ref's element or descendant elements
      if (!popoverRef.current || popoverRef.current.contains(targetEl)) {
        return
      }

      setIsPopoverOpen(false)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return function cleanup() {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [popoverRef, setIsPopoverOpen])

  return (
    <>
      {isPopoverOpen && (
        <Box
          ref={popoverRef}
          maxW="400px"
          pos="absolute"
          right={0}
          top={6}
          width="max-content"
        >
          <Box
            _after={{
              content: '" "',
              position: 'absolute',
              right: '28px',
              top: '-16px',
              borderTop: 'none',
              borderRight: '16px solid transparent',
              borderLeft: '16px solid transparent',
              borderBottom: '16px solid teal',
            }}
            backgroundColor="gray.700"
            borderRadius="base"
            borderTop="4px solid teal"
            boxShadow="lg"
            m={10}
            p={4}
            pos="relative"
          >
            {children}
            <Box as="p" color="gray.400" mt={4}>
              {`Tap anywhere on the page to close the pop-up. 👋`}
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
