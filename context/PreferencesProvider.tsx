import { createContext, useContext, useEffect, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

type PreferencesContext = {
  accessibleFont: boolean
  setAccessibleFont: Dispatch<SetStateAction<boolean>>
}

const PreferencesContext = createContext<PreferencesContext | undefined>(
  undefined
)

export function PreferencesProvider({ children }: any) {
  const [accessibleFont, setAccessibleFont] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('accessibleFont')) {
        return true
      }
    }

    return false
  })

  useEffect(() => {
    const storage = window.localStorage
    const serialize = JSON.stringify

    if (accessibleFont) {
      storage.setItem('accessibleFont', serialize(true))
      document.documentElement.setAttribute('data-font', 'accessible')
    } else {
      storage.removeItem('accessibleFont')
      document.documentElement.removeAttribute('data-font')
    }
  }, [accessibleFont])

  return (
    <PreferencesContext.Provider value={{ accessibleFont, setAccessibleFont }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)

  if (context === undefined) {
    throw new Error(
      '💩 usePreferences must be used within a PreferencesProvider.'
    )
  }

  return context
}
