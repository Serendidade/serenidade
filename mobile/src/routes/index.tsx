import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import GetStarted from '../pages/GetStarted'
import GetStartedHeadset from '../pages/GetStartedHeadset'
import Meditation from '../pages/Meditation'

const Auth = createStackNavigator()
const Drawer = createDrawerNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' }
    }}
    initialRouteName="GetStarted"
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="GetStarted" component={GetStarted} />
    <Auth.Screen name="GetStartedHeadset" component={GetStartedHeadset} />
    <Auth.Screen name="Meditation" component={DrawerRoutes} />

  </Auth.Navigator>
)

export const DrawerRoutes: React.FC = (props) => (
  <Drawer.Navigator initialRouteName="Meditation" {...props}>
    <Drawer.Screen name="Meditation" component={Meditation} />
  </Drawer.Navigator>
)

export default AuthRoutes
