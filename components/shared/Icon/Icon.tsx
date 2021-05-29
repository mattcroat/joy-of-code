import { cloneElement } from 'react'

import * as SVG from './Icons'

export type Icon =
  | 'bulb'
  | 'feed'
  | 'figma'
  | 'github'
  | 'javascript'
  | 'moon'
  | 'more'
  | 'newsletter'
  | 'next'
  | 'paintBrush'
  | 'react'
  | 'sun'
  | 'swatch'
  | 'typescript'

interface IconProps {
  icon: Icon
  size?: number
}

const icons = {
  bulb: <SVG.Bulb />,
  feed: <SVG.Feed />,
  figma: <SVG.FigmaLogo />,
  github: <SVG.GitHubLogo />,
  javascript: <SVG.JavaScriptLogo />,
  moon: <SVG.Moon />,
  more: <SVG.More />,
  newsletter: <SVG.Newsletter />,
  next: <SVG.NextLogo />,
  paintBrush: <SVG.PaintBrush />,
  react: <SVG.ReactLogo />,
  sun: <SVG.Sun />,
  swatch: <SVG.Swatch />,
  typescript: <SVG.TypeScriptLogo />,
}

export function Icon({ icon, size = 32 }: IconProps): JSX.Element | null {
  if (icon && icons[icon]) {
    return cloneElement(icons[icon], { size })
  }

  return null
}
