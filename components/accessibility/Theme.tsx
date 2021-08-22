import { useEffect, useState } from 'react'

import type { FocusEvent } from 'react'

const themes = ['🌙 Dusk', '☀️ Light', '🐺 Night Howl', '🧠 Night Mind']

export function Theme() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme') as string
      }
    }
    return 'Dusk'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
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
        className="w-24 p-1 font-bold bg-transparent appearance-none"
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
