import { FocusEvent, useEffect, useState } from 'react'

const themes = ['🌙 Dusk', '☀️ Light', '🐺 Night Howl', '🧠 Night Mind']
const browser = typeof window !== 'undefined'

export function Theme() {
  const [theme, setTheme] = useState<string>(() => {
    if (browser) {
      const theme = window.localStorage.getItem('theme')
      const { matches: prefersLight } = window.matchMedia(
        'prefers-color-scheme: light'
      )
      if (theme) return theme
      if (!theme && prefersLight) return '☀️ Light'
    }
    return '🌙 Dusk'
  })

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  function handleSelect(event: FocusEvent<HTMLSelectElement>) {
    setTheme(event.target.value)
  }

  return (
    <div className="border rounded-full text-primary bg-muted border-primary border-b-[3px]">
      <label className="sr-only" htmlFor="theme">
        Choose a theme
      </label>
      <select
        className="p-1 font-bold text-center bg-transparent appearance-none"
        defaultValue="theme"
        id="theme"
        name="theme"
        onChange={handleSelect}
      >
        <option disabled={true} hidden={true} value="theme">
          {'👩‍🎨 Theme'}
        </option>
        {themes.map((theme) => (
          <option key={theme} className="font-bold bg-muted" value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  )
}
