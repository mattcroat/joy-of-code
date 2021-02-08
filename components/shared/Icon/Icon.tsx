import { cloneElement } from 'react'

import * as SVG from './Icons'

interface Props {
  icon: 'js' | 'spider' | 'react' | 'paintBrush' | 'sun' | 'moon'
  size?: number
}

const icons = {
  js: <SVG.JsIcon />,
  spider: <SVG.SpiderIcon />,
  react: <SVG.ReactIcon />,
  paintBrush: <SVG.PaintBrushIcon />,
  sun: <SVG.SunIcon />,
  moon: <SVG.MoonIcon />,
}

export function Icon({ icon, size = 32 }: Props): JSX.Element | null {
  if (icon && icons[icon]) {
    return cloneElement(icons[icon], { size })
  }

  return null
}
