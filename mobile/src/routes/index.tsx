import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import GetStarted from '../pages/GetStarted'
import GetStartedHeadset from '../pages/GetStartedHeadset'
import Meditation from '../pages/Meditation'
import MeditationPlaylist from '../pages/MeditationPlaylist'
import MeditationPlayer from '../pages/MeditationPlayer'
import Reflection from '../pages/Reflection'

import fonts from '../global/fonts'
import { View, ScrollView } from 'react-native'
import { Container, Title } from './styles'

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
    <Auth.Screen name="Reflection" component={DrawerRoutes} />

  </Auth.Navigator>
)

export const DrawerRoutes: React.FC = (props) => (
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
          <View style={{ flex: 4 }}>
            <ScrollView>
              <DrawerItemList {...props} />
              <DrawerItem label="Sair" onPress={() => {}} labelStyle={{ fontFamily: fonts.raleway.bold, fontSize: 20, alignSelf: 'auto' }}/>
            </ScrollView>
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

export default AuthRoutes
