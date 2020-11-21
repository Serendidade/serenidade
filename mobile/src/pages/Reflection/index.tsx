import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import ReflectionCard from '../../components/ReflectionCard'
import colors from '../../global/colors'

import { Container, AddReflectionCard, Wrap } from './styles'

const data = [
  {
    date: '16/11/1997',
    content: 'iusdhllsuihfdladkfhakjlhadsflkjhdsafjklhsdfajkahfdkldfsjjkadfshadfslkhjksdfhla'
  },
  {
    date: '16/11/1997',
    content: 'iusdhllsuihfdladkfhakjlhadsflkjhdsafjklhsdfajkahfdkldfsjjkadfshadfslkhjksdfhla'
  },
  {
    date: '16/11/1997',
    content: 'iusdhllsuihfdladkfhakjlhadsflkjhdsafjklhsdfajkahfdkldfsjjkadfshadfslkhjksdfhla'
  }
]

const Reflection: React.FC = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={{ backgroundColor: '#e7e0ef' }}>
      <Header headerTitle="Reflexões" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <AddReflectionCard iconName="plus" text="O que te fez sentir gratidão hoje?" isDateCard={false} cardColor={colors.primaryColor}/>

      <Wrap style={{ elevation: 3 }}>
        <Container>

          <ReflectionCard text="29 de outubro de 2020" isDateCard cardColor={colors.secondaryColor}/>
          <ReflectionCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." isDateCard cardColor={colors.spectres.grey[3]} iconName="dots-vertical"/>
          <ReflectionCard text="30 de outubro de 2020" isDateCard cardColor={colors.secondaryColor}/>
          <ReflectionCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." isDateCard cardColor={colors.spectres.grey[3]} iconName="dots-vertical"/>
          <ReflectionCard text="31 de outubro de 2020" isDateCard cardColor={colors.secondaryColor}/>
          <ReflectionCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       " isDateCard cardColor={colors.spectres.grey[3]} iconName="dots-vertical"/>
        </Container>
      </Wrap>
    </ScrollView>
  )
}

export default Reflection
