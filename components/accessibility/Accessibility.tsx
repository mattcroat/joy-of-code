import { Theme } from './Theme'
import { UniversalAccess } from './UniversalAccess'

export function Accessibility() {
  return (
    <div className="fixed z-30 flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-secondary top-4 right-4 text-muted">
      <UniversalAccess />
      <Theme />
    </div>
  )
}
