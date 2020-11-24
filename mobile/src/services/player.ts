import TrackPlayer, { State, Track } from 'react-native-track-player'

export const ISPLAYING = 3
export const ISPAUSED = 2
export const ISSTOPPED = 1

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

export const currentState = async () : Promise<State> => {
  console.log(`PLAYING: ${TrackPlayer.STATE_PLAYING} - ${(await TrackPlayer.getState()).toString}
    STOPPED: ${TrackPlayer.STATE_STOPPED} - ${(await TrackPlayer.getState()).toString()}
    PAUSED: ${TrackPlayer.STATE_PAUSED} - ${(await TrackPlayer.getState()).toString()}
    READY: ${TrackPlayer.STATE_READY} - ${(await TrackPlayer.getState()).toString()}

  `)
  return await TrackPlayer.getState()
}
