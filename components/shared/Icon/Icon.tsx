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
}

export function Icon({ icon, size = 32 }: Props): JSX.Element | null {
  if (icon && icons[icon]) {
    return cloneElement(icons[icon], { size })
  }

  return null
}
