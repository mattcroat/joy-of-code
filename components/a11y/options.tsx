import { Font } from './font'
import { Theme } from './theme'

export function Options() {
  return (
    <div className="fixed z-30 flex items-center gap-2 px-4 py-2 transition-opacity duration-300 rounded-full shadow-md bg-secondary top-4 right-4 text-muted">
      <Font />
      <Theme />
    </div>
  )
}
