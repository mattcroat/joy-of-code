type SoundEffects = { [key: string]: string }
type Sounds = { [key: string]: HTMLAudioElement }
type SoundType = 'confirm' | 'page'

const soundEffects: SoundEffects = {
  confirm: 'sfx/confirm.mp3',
  page: 'sfx/page.mp3',
}

const sounds: Sounds = Object.keys(soundEffects).reduce(
  (soundsCollection, currentSound) => {
    if (typeof window !== 'undefined') {
      return {
        ...soundsCollection,
        [currentSound]: new window.Audio(soundEffects[currentSound]),
      }
    }

    return soundsCollection
  },
  {}
)

export function playSound(soundEffect: SoundType) {
  sounds[soundEffect].volume = 0.1
  sounds[soundEffect].play()
  sounds[soundEffect].currentTime = 0
  sounds[soundEffect].play()
}
