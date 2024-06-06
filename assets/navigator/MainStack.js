import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'
import EntrarScreen from '../pages/EntrarScreen'



const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Início',
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#008B8B',
          height:100,
        },
        headerTitleStyle:{
          color:'#00FFFF',
          fontSize:23,
          fontWeight:'bold'
        }
      }} />
      <MainStack.Screen name='About' component={AboutScreen} options={
        ({route})=>({
          title: route.params?.name,
          title:'Tela de Login ',
        })
      }/>
      <MainStack.Screen name='Entrar' component={EntrarScreen} options={
       ({route})=>({
         title: route.params?.name,
       })
      }/>
      
 




   




       

    


          


        
      
    </MainStack.Navigator>
  )
}