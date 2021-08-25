import { playSound } from '@/root/utils/helpers/playSound'
import { Spin } from '@/root/components/animation'

interface DelightProps {
  children: React.ReactNode
}

export function Delight({ children }: DelightProps) {
  return <Spin playSound={() => playSound('confirm')}>{children}</Spin>
}
