import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import colors from './global/colors'
import Routes from './routes'
import AppProvider from './hooks'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.primaryColor} />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#F16E8B' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
)

export default App
