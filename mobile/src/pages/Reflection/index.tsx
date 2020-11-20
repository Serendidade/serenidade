import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import { Container } from './styles'

const Reflection: React.FC = ({ navigation }) => {
  return <>
    <Header headerTitle="Reflexto" headerIcon="arrow-left" execute={navigation.goBack()}/>
    <View>
      <Text>
       ayy
      </Text>
    </View>
  </>
}

export default Reflection
