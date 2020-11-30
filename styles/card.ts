import {
  faHtml5,
  faJs,
  faReact,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

// custom extended Chakra UI theme
import chakraTheme from '@/styles/theme'

interface CardTheme {
  [key: string]: {
    bg: string
    color: string
    icon: IconDefinition
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
    icon: faJs,
  },
  React: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.blue[400]},
      ${chakraTheme.colors.blue[600]} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: faReact,
  },
  Web: {
    bg: `radial-gradient(
      circle,
      ${chakraTheme.colors.orange[200]},
      ${chakraTheme.colors.orange[400]} 100%
    )`,
    color: `${chakraTheme.colors.white}`,
    icon: faHtml5,
  },
}

export default cardTheme
