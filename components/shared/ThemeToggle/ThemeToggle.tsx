import { IconButton, useColorMode } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { bgColor, mutedColor, primaryColor } from '@/root/styles/colors'

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  const icon = colorMode === 'dark' ? <Icon icon="sun" /> : <Icon icon="moon" />

  return (
    <IconButton
      _hover={hoverStyle}
      aria-label="Toggle dark mode"
      bg={bgColor[colorMode]}
      color={mutedColor[colorMode]}
      icon={icon}
      onClick={toggleColorMode}
    />
  )
}
