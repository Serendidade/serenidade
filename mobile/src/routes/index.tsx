import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React, { useCallback } from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import GetStarted from '../pages/GetStarted'
import GetStartedHeadset from '../pages/GetStartedHeadset'
import Meditation from '../pages/Meditation'
import MeditationPlaylist from '../pages/MeditationPlaylist'
import MeditationPlayer from '../pages/MeditationPlayer'
import Reflection from '../pages/Reflection'
import DetailReflection from '../pages/Reflection/Detail'
import { useAuth } from '../hooks/auth'
import { resetRoutes } from '../utils/routing'

import fonts from '../global/fonts'
import { BackHandler, View } from 'react-native'
import { Container, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

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
    <Auth.Screen name="MeditationPlaylist" component={DrawerRoutes} />
    <Auth.Screen name="MeditationPlayer" component={MeditationPlayer} />
    <Auth.Screen name="Meditation" component={Meditation} />
    <Auth.Screen name="Reflections" component={DrawerRoutes} />
    <Auth.Screen name="DetailReflection" component={DetailReflection} />
  </Auth.Navigator>
)

export const DrawerRoutes: React.FC = (props) => {
  const auth = useAuth()
  const navigation = useNavigation()

  const exitApp = useCallback(async () => {
    BackHandler.exitApp()
    auth.signOut()
  }, [auth, navigation])

  return (
    <>
      <Drawer.Navigator
        initialRouteName="MeditationPlaylist" {...props}
        keyboardDismissMode="on-drag"
        detachInactiveScreens={true}
        drawerContent={(props) =>
          <>
            <Container>
              <Title>Serenidade</Title>
            </Container>
            <View style={{ flex: 4, justifyContent: 'space-between' }}>

              <DrawerItemList {...props} />
              <View style={{ flex: 4 }} />
              <DrawerItem
                label="Sair"
                labelStyle={{ fontFamily: fonts.raleway.bold, fontSize: 20, color: 'red' }}
                onPress={() => {
                  exitApp()
                }}
              />
            </View>
          </>
        }
        drawerContentOptions={{
          activeTintColor: '#7159ff',
          inactiveTintColor: '#333',
          itemStyle: { backgroundColor: 'transparent' },
          labelStyle: { fontFamily: fonts.raleway.bold, fontSize: 20 },
        }}
        drawerStyle={{
          backgroundColor: '#f6f6f6',
          borderRadius: 5,

        }}>
        <Drawer.Screen
          name="MeditationPlaylist"
          component={MeditationPlaylist}
          options={{
            title: 'Meditações',
            gestureEnabled: true,
            swipeEnabled: true,
          }}/>
        <Drawer.Screen name="Reflections" component= {Reflection} options={{
          title: 'Reflexões',
          gestureEnabled: true,
          swipeEnabled: true,
        }}/>

      </Drawer.Navigator>
    </>
  )
}

export default AuthRoutes
