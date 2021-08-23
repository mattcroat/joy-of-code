import type { Dispatch, SetStateAction } from 'react'

interface MenuToggleProps {
  open: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

export function MenuToggle({ open, toggle }: MenuToggleProps) {
  return (
    <button
      aria-label="Menu"
      className="fixed p-5 rounded-full shadow-md pointer-events-auto text-muted bg-secondary left-3 bottom-3"
      onClick={() => toggle(!open)}
    >
      <svg height="23" viewBox="0 0 23 23" width="23">
        <path
          d="M 2 2.5 L 20 2.5"
          fill="transparent"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M 2 9.423 L 20 9.423"
          fill="transparent"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M 2 16.346 L 20 16.346"
          fill="transparent"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    </button>
  )
}
