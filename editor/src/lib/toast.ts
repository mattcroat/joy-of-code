import { toast } from '@zerodevx/svelte-toast'

export function failure(message: string): void {
  toast.push(message, {
    theme: {
      '--toastBackground': 'hsl(0 70% 30%)',
      '--toastBarBackground': 'hsl(0 70% 40%)',
    },
  })
}

export function success(message: string): void {
  toast.push(message, {
    theme: {
      '--toastBackground': 'hsl(148 70% 30%)',
      '--toastBarBackground': 'hsl(148 70% 40%)',
    },
  })
}
