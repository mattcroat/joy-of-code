import React from 'react'

export function useSound(url: string) {
  const [audio, setAudio] = React.useState<HTMLAudioElement>()

  React.useEffect(() => {
    const sound = new window.Audio(url)
    sound.volume = 0.1
    setAudio(sound)
  }, [url])

  function playSound() {
    if (!audio) return

    audio.pause()
    audio.currentTime = 0
    audio.play()
  }

  return playSound
}
