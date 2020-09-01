import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

const App: React.FC = () => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
      </View>
    </>
)

export default App
