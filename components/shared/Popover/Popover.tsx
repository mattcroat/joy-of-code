import { useEffect, useRef, useState } from 'react'

import { FadeIn } from '@/root/components/animation'

interface PopoverProps {
  children: React.ReactNode
  isOpen: boolean
}

export function Popover({ children, isOpen = false }: PopoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(isOpen)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function listener(event: Event) {
      const targetEl = event.target as HTMLElement

      // do nothing if clicking ref's element or descendant elements
      if (!popoverRef.current || popoverRef.current.contains(targetEl)) {
        return
      }

      setIsPopoverOpen(false)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return function cleanup() {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [popoverRef, setIsPopoverOpen])

  return (
    <>
      {isPopoverOpen && (
        <FadeIn duration={1000}>
          <div
            ref={popoverRef}
            className="absolute hidden text-left md:max-w-[400px] md:block -right-11 top-12 w-max"
          >
            <div className="relative p-4 border-t-4 border-highlight rounded-md shadow-lg backdrop after:absolute after:-top-4 after:right-[44px] after:border-t-0 after:border-r-[16px] after:border-r-transparent after:border-l-[16px] after:border-l-transparent after:border-b-[16px] after:border-highlight">
              {children}
              <p className="mt-4 text-muted">
                {`Scrolling closes the pop-up. 👆`}
              </p>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  )
}
