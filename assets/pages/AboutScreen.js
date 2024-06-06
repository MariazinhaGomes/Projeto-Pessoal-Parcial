import  React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, Image ,TouchableOpacity} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {styles} from './styles'

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUpButton, setSignUpButton] = useState('')
  const [birth, setBirth] = useState('')
  const [forgotButton, setForgotButton] = useState('')

  const handleHomeClick = () => {
    navigation.goBack()
  }
  const handleEntrarClick = () => {
    navigation.goBack()
  }

  const handleSignUpButton = () => {
    setSignUpButton('cadastre')
    alert(birthField)
  }

 const handleForgotButton = () => {
    setForgotButton('esqueci')  
    alert(passwordField)
 }

  return (
    <ScrollView style={styles.body}>
    {signUpButton != 'cadastre' &&
        <>
    {forgotButton != 'esqueci' &&
        <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.png')}/>
        <Text style={styles.h1}>Film Fanatic</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#fff'
          value={email}
          onChangeText={t => setEmail(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
           style={styles.inputField}
           placeholder='**********' 
           placeholderTextColor='#fff'
           value={password}
           onChangeText={t => setPassword(t)}
           autoCapitalize='none'
           secureTextEntry
           />
        </View>

         <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgoBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.button2}>
      <Button title='Entrar' onPress={handleEntrarClick} />
      </View>
      
        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
      </>
     }
      </>
     }

    {signUpButton == 'Cadastre' &&
     <>
    <View style={styles.container}>
     <TextInput 
     style={styles.inputField}
     placeholder='Email'
     placeholderTextColor='#fff'
     value={email}
     onChangeText={t=>setEmail(t)}
     keyboardType='Email-address'

     />
    </View>
     </>
   }

    {signUpButton == 'cadastre' &&
        <>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.png')}/>
        <Text style={styles.h1}> Sistema de cadastro</Text>
        <Text style={styles.h2}>Bem vindo(a)! </Text>

         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#fff'
          value={email}
          onChangeText={t => setEmail(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
          style={styles.inputField}
          placeholder='*********'
          placeholderTextColor='#fff'
          value={password}
          onChangeText={t => setPassword(t) }
          autoCapitalize='none'
          secureTextEntry
        />
        </View>
        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Data de nascimento</Text>
        <TextInput
        style={styles.inputField}
        placeholder='dd/mm/aaaa'
        placeholderTextColor='#fff'
        value={birth}
        onChangeText={t => setBirth(t) }
        autoCapitalize='none'
        secureTextEntry
        
        />
        <View style={styles.button4}>
         <Button title='Entrar' onPress={handleEntrarClick} />
        </View>

        </View> 
      </View>
      </>
     } 
       {forgotButton == 'esqueci' &&
        <>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.png')}/>
        <Text style={styles.h1}>
Recuperação de Senha</Text>
        <Text style={styles.h2}>Bem vindo(a)! Crie uma nova senha abaixo.</Text>
      
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#fff'
          value={email}
          onChangeText={t => setEmail(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
      <View style={styles.button4}>
      <Button title='Enviar' onPress={handleEntrarClick} />
      </View>
        </View> 
      </View>
      </>
     } 
    </ScrollView>
  )
}
