import { useEffect, useState } from 'react'

import { Icon } from '@/root/components/shared/icon'
import { Popover } from '@/root/components/shared/popover'
import { Spin } from '@/root/components/animation'

export function Font() {
  const [accessibleFont, setAccessibleFont] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('accessibleFont')) {
        return true
      }
    }
    return false
  })
  const [popover, setPopover] = useState<boolean>(true)

  useEffect(() => {
    if (accessibleFont) {
      window.localStorage.setItem('accessibleFont', JSON.stringify(true))
      document.documentElement.setAttribute('data-font', 'accessible')
    } else {
      window.localStorage.removeItem('accessibleFont')
      document.documentElement.removeAttribute('data-font')
    }
  }, [accessibleFont])

  useEffect(() => {
    const handlePopover = () => setPopover(false)
    window.addEventListener('scroll', handlePopover)

    return function cleanup() {
      window.removeEventListener('scroll', handlePopover)
    }
  }, [])

  const isToggled = accessibleFont ? 'text-highlight' : 'text-muted'

  return (
    <button
      className="relative p-0 transition-colors"
      onClick={() => setAccessibleFont(!accessibleFont)}
    >
      <Spin>
        <Icon
          className={`w-8 h-8 hover:text-highlight transition-colors ${isToggled}`}
          icon="universalAccess"
        />
        <span className="sr-only">Use font for dyslexia</span>
      </Spin>
      {popover && (
        <Popover isOpen={true}>
          <p className="mb-2 text-lg font-bold">Accessibility</p>
          <hr className="border-gray-600" />
          <p className="mt-4">
            If you have difficulty reading try using a font for dyslexia.
          </p>
        </Popover>
      )}
    </button>
  )
}
