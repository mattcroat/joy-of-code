import { FC } from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { bgColor, mutedColor, primaryColor } from '@/styles/colors'

const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const hoverStyle = {
    transition: 'color .5s ease',
    color: primaryColor[colorMode],
  }

  const icon =
    colorMode === 'dark' ? (
      <FontAwesomeIcon icon={faSun} size="2x" />
    ) : (
      <FontAwesomeIcon icon={faMoon} size="2x" />
    )

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

export default ThemeToggle
