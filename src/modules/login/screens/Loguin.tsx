import React from 'react'
import { Text, View } from 'react-native'
import { ContainerLoguin } from '../styles/login.style'
import Input from '../../../shared/components/input/Input'

const Loguin = () => {
  return (
    <View>
      <ContainerLoguin>
        <Text>Loguin</Text>
        <Input />
      </ContainerLoguin>
    </View>
  )
}

export default Loguin