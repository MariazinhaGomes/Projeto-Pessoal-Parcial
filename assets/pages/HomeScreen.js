import React ,{ useState} from 'react'
import { View, Text, StyleSheet, Button,TextInput, Image, ActivityIndicator, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import{ styles} from './styles'

export default function HomeScreen() {
  
  const navigation = useNavigation()

  const route = useRoute('')
  const name = route.params?.name

  const handleAboutClick = () => {
    navigation.navigate('About', {cor: name})
  }


  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('./img/logo.png')} />
     <View style={styles.loadingArea}>
        <ActivityIndicator size='large' color='#fff' />
        <Text style={styles.loadingText}>Carregando...</Text>
     </View>
     

      <View style={styles.button}>
      <Button title='Começar' onPress={handleAboutClick} />
      </View>
    </View>
    </ScrollView>
  )
}

