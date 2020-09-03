import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' }
    }}
    initialRouteName='SignIn'
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
)

export default AuthRoutes
