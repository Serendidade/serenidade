import AsyncStorage from '@react-native-community/async-storage'

export async function isFirstAccess () : Promise<boolean> {
  const response = await AsyncStorage.getItem('firstConfig')

  if (response === 'true') return true

  return false
}

export async function setFirstAccess () : Promise<void> {
  await AsyncStorage.setItem('firstConfig', 'true')
}
