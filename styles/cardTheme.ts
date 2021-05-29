import { chakraTheme } from '@/root/styles/chakraTheme'
import type { Icon } from '@/root/components/shared/Icon'

interface CardTheme {
  [key: string]: {
    bg: string
    color: string
    icon: Icon
  }
}

export const cardTheme: CardTheme = {
  CSS: {
    bg: '/images/categories/css.webp',
    color: `${chakraTheme.colors.white}`,
    icon: 'swatch',
  },
  General: {
    bg: '/images/categories/general.webp',
    color: `${chakraTheme.colors.white}`,
    icon: 'bulb',
  },
  Git: {
    bg: '/images/categories/git.webp',
    color: `${chakraTheme.colors.white}`,
    icon: 'github',
  },
  JavaScript: {
    bg: '/images/categories/javascript.webp',
    color: `${chakraTheme.colors.white}`,
    icon: 'javascript',
  },
  React: {
    bg: '/images/categories/react.webp',
    color: `${chakraTheme.colors.white}`,
    icon: 'react',
  },
}
