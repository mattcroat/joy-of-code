import { Box } from '@chakra-ui/react'

import { Delight } from '@/root/components/shared/Delight'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

export function ChangeTheme() {
  return (
    <Box>
      <Delight>
        <ThemeToggle />
      </Delight>
    </Box>
  )
}
