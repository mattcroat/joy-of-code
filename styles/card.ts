// custom extended Chakra UI theme
import chakraTheme from '@/styles/theme'

interface CardTheme {
  [key: string]: {
    bg: string
    color: string
    icon: 'js' | 'spider' | 'react' | 'paintBrush' | 'sun' | 'moon'
  }
}

const cardTheme: CardTheme = {
  JavaScript: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.yellow[200]},
      ${chakraTheme.colors.yellow[400]} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'js',
  },
  React: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.blue[400]},
      ${chakraTheme.colors.blue[600]} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'react',
  },
  Web: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.orange[200]},
      ${chakraTheme.colors.orange[400]} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: 'spider',
  },
}

export default cardTheme
