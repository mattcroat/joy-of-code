import { cloneElement } from 'react'

import * as SVG from './Icons'

export type Icon =
  | 'paintBrush'
  | 'js'
  | 'react'
  | 'sun'
  | 'moon'
  | 'feed'
  | 'swatch'
  | 'bulb'
  | 'more'
  | 'figma'
  | 'github'
  | 'nextjs'
  | 'typescript'
  | 'newsletter'

interface Props {
  icon: Icon
  size?: number
}

const icons = {
  paintBrush: <SVG.PaintBrush />,
  js: <SVG.JavaScriptLogo />,
  react: <SVG.ReactLogo />,
  sun: <SVG.Sun />,
  moon: <SVG.Moon />,
  feed: <SVG.Feed />,
  swatch: <SVG.Swatch />,
  bulb: <SVG.Bulb />,
  more: <SVG.More />,
  figma: <SVG.FigmaLogo />,
  github: <SVG.GitHubLogo />,
  nextjs: <SVG.NextJSLogo />,
  typescript: <SVG.TypeScriptLogo />,
  newsletter: <SVG.Newsletter />,
}

export function Icon({ icon, size = 32 }: Props): JSX.Element | null {
  if (icon && icons[icon]) {
    return cloneElement(icons[icon], { size })
  }

  return null
}
