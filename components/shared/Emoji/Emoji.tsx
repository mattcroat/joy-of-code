import { Wave } from '@/root/components/animation'

interface EmojiProps {
  emoji: string
  label: string
}

export function Emoji({ emoji, label }: EmojiProps) {
  return (
    <div aria-label={label} className="inline-block" role="img">
      <Wave delay={300} duration={2000}>
        {emoji}
      </Wave>
    </div>
  )
}
