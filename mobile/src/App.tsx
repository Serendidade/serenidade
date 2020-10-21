import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import colors from './global/colors'
import Routes from './routes'
import AppProvider from './hooks'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.spectres.purple[0]} />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: colors.primaryColor }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
)

export default App
