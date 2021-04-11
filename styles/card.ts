import type { Icon } from '@/root/components/shared/Icon'
// custom extended Chakra UI theme
import chakraTheme from '@/root/styles/theme'

interface CardTheme {
  [key: string]: {
    bg: string
    color: string
    icon: Icon
  }
}

export const cardTheme: CardTheme = {
  JavaScript: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.yellow[400]},
      ${chakraTheme.colors.black} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'js',
  },
  React: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.blue[400]},
      ${chakraTheme.colors.black} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'react',
  },
  CSS: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.cyan[400]},
      ${chakraTheme.colors.black} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'swatch',
  },
  General: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.orange[400]},
      ${chakraTheme.colors.black} 100%

    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'bulb',
  },
}
