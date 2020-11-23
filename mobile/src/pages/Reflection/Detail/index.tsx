import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

// import { Container } from './styles';

interface ReflectionData {
  content: string
  id: number
  created_at: string
}

const Detail: React.FC<ReflectionData> = ({ content, id, created_at }: ReflectionData) => {
  const [reflection, setReflection] = useState<ReflectionData>({})

  useEffect(() => {
    setReflection({ content, id, created_at })
  }, [])

  return <Text>
    {content}
  </Text>
}

export default Detail
