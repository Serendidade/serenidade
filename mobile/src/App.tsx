import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import Routes from './routes'

const App: React.FC = () => (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={{ flex: 1, backgroundColor: '#f16e8b' }}>
        <Routes />
      </View>
    </NavigationContainer>
)

export default App
