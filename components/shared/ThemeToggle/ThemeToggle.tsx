import { IconButton, useColorMode } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { mutedColor, primaryColor } from '@/root/styles/colors'

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  const icon = colorMode === 'dark' ? <Icon icon="sun" /> : <Icon icon="moon" />

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={toggleColorMode}
      icon={icon}
      bg="none"
      color={mutedColor[colorMode]}
      _hover={hoverStyle}
    />
  )
}
