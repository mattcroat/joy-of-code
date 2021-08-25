import type { Dispatch, SetStateAction } from 'react'

interface MenuToggleProps {
  open: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

export function MenuToggle({ open, toggle }: MenuToggleProps) {
  const topLine = open ? 'translate-y-2 rotate-45' : ''
  const middleLine = open ? 'opacity-0' : ''
  const bottomLine = open ? '-translate-y-2 -rotate-45' : ''

  return (
    <button
      aria-label="Menu"
      className="fixed p-5 rounded-full shadow-md pointer-events-auto bg-secondary left-3 bottom-3"
      onClick={() => toggle(!open)}
    >
      <div className="flex flex-col justify-around w-6 h-6">
        <span
          className={`${topLine} h-1 transition-transform duration-300 bg-muted rounded`}
        ></span>
        <span
          className={`${middleLine} h-1 transition-transform duration-300 bg-muted rounded`}
        ></span>
        <span
          className={`${bottomLine} h-1 transition-transform duration-300 bg-muted rounded`}
        ></span>
      </div>
    </button>
  )
}
