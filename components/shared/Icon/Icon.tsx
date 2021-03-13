import { cloneElement } from 'react'

import * as SVG from './Icons'

interface Props {
  icon: 'paintBrush' | 'js' | 'react' | 'spider' | 'sun' | 'moon' | 'feed'
  size?: number
}

const icons = {
  paintBrush: <SVG.PaintBrush />,
  js: <SVG.JavaScriptLogo />,
  react: <SVG.ReactLogo />,
  spider: <SVG.Spider />,
  sun: <SVG.Sun />,
  moon: <SVG.Moon />,
  feed: <SVG.Feed />,
}

export function Icon({ icon, size = 32 }: Props): JSX.Element | null {
  if (icon && icons[icon]) {
    return cloneElement(icons[icon], { size })
  }

  return null
}
