import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import ReflectionCard from '../../components/ReflectionCard'

const Reflection: React.FC = () => {
  const navigation = useNavigation()
  return <>
    <Header headerTitle="Reflexões" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
    <View>
      <ReflectionCard/>
    </View>
  </>
}

export default Reflection
