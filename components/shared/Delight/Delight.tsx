import { playSound } from '@/root/utils/helpers/playSound'
import { Spin } from '@/root/components/animation'

import type { ReactNode } from 'react'

interface DelightProps {
  children: ReactNode
}

export function Delight({ children }: DelightProps) {
  return <Spin playSound={() => playSound('confirm')}>{children}</Spin>
}
