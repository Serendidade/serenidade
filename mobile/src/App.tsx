import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import colors from './global/colors'
import Routes from './routes'
import AppProvider from './hooks'
import { SafeAreaView } from 'react-native-safe-area-context'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.spectres.purple[0]} />
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.spectres.purple[0] }}>
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: colors.spectres.purple[0] }}>
          <Routes />
        </View>
      </AppProvider>
    </SafeAreaView>
  </NavigationContainer>
)

export default App
