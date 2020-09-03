import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import colors from './global/colors'
import Routes from './routes'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.primaryColor} />
    <View style={{ flex: 1, backgroundColor: '#F16E8B' }}>
      <Routes />
    </View>
  </NavigationContainer>
)

export default App
