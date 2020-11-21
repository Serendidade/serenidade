import TrackPlayer, { Track } from 'react-native-track-player'

const capabilities = [
  TrackPlayer.CAPABILITY_PLAY,
  TrackPlayer.CAPABILITY_PAUSE,
  TrackPlayer.CAPABILITY_STOP
]

const compactCapabilities = [
  TrackPlayer.CAPABILITY_PLAY,
  TrackPlayer.CAPABILITY_PAUSE,
  TrackPlayer.CAPABILITY_STOP
]

export const player = async () : Promise<void> => {
  await TrackPlayer.setupPlayer()
}

export const play = async (track: Track) : Promise<void> => {
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities,
    compactCapabilities,
  })
  await TrackPlayer.add(track)
  await TrackPlayer.play()
}

export const pause = async () : Promise<void> => {
  await TrackPlayer.pause()
}
