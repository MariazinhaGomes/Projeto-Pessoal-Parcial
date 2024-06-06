import React,{ useState} from 'react'
import { Button, View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'





export default function EntrarScreen() {
  const navigation = useNavigation()
  const route = useRoute('')

  const handleAboutClick = () => {
    navigation.goBack('About')
  }
  
}




 


