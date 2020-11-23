// icons
import {
  faHtml5,
  faJs,
  faReact,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

// custom extended Chakra UI theme
import theme from '@/styles/theme'

// types
interface Card {
  [key: string]: {
    bg: string
    color: string
    icon: IconDefinition
  }
}

const card: Card = {
  js: {
    bg: `radial-gradient(
      circle,
      ${theme.colors.yellow[200]},
      ${theme.colors.yellow[400]} 100%
    )`,
    color: `${theme.colors.black}`,
    icon: faJs,
  },
  react: {
    bg: `radial-gradient(
      circle,
      ${theme.colors.blue[400]},
      ${theme.colors.blue[600]} 100%
    )`,
    color: `${theme.colors.white}`,
    icon: faReact,
  },
  web: {
    bg: `radial-gradient(
      circle,
      ${theme.colors.orange[200]},
      ${theme.colors.orange[400]} 100%
    )`,
    color: `${theme.colors.black}`,
    icon: faHtml5,
  },
}

export default card
