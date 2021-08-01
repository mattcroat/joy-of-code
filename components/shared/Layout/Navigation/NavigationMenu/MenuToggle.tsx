import { motion } from 'framer-motion'

import type { Dispatch, SetStateAction } from 'react'

type MenuToggleProps = {
  open: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

type PathProps = {
  [key: string]: any
}

function Path({ ...props }: PathProps) {
  return (
    <motion.path
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  )
}

export function MenuToggle({ open, toggle }: MenuToggleProps) {
  return (
    <button
      aria-label="Menu"
      className="fixed p-5 text-white rounded-full shadow-md pointer-events-auto bg-secondary left-3 bottom-3"
      onClick={() => toggle(!open)}
    >
      <svg height="23" viewBox="0 0 23 23" width="23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          transition={{ duration: 0.1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}
