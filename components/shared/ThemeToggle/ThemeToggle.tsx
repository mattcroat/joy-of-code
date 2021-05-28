import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconBackground = useColorModeValue('gray.600', 'gray.400')
  const iconHoverColor = useColorModeValue('blue.600', 'orange.200')

  const hoverStyle = {
    transition: 'color .5s ease',
    color: iconHoverColor,
  }

  const icon = colorMode === 'dark' ? <Icon icon="sun" /> : <Icon icon="moon" />

  return (
    <IconButton
      _hover={hoverStyle}
      aria-label="Toggle dark mode"
      bg="none"
      color={iconBackground}
      icon={icon}
      onClick={toggleColorMode}
    />
  )
}
