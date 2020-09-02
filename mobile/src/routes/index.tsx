import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Welcome from '../pages/Welcome'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'}
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
  </Auth.Navigator>
)

export default AuthRoutes
