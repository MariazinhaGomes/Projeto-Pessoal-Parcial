import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  loadingArea:{
    //flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  loadingText:{
   color:'#000',
  },
   logo:{
    width: 130,
    height:130,
    borderRadius:40,
  }, 
  button:{
   marginTop:80,
   color:'#008B8B'
  },
  body:{
    backgroundColor:'#008B8B',
    alignItems:'center',
    justifyContent:'center',
  },
  inputField:{
    color:'#000',
    borderWidth:2,
    borderRadius:5,
    borderColor:'#00CED1',
    fontSize:15,
    padding:10,
  },

  h1:{
    color:  '#000',
    fontSize:25,
    fontWeight: 'bold',
    paddingVertical: 10, 
    marginTop:20,
  },
  h2:{
    color: '#000',
    fontSize: 15,
    marginTop:20,
  },
  h3:{
    color: '#000',
    fontSize: 15,
    marginTop:30,
    alignItems: 'center',
  },
  inputArea:{
    width: 280,
    paddinTop:20,
  },
  inputLabel:{

    color:'#777',
    fontSize:14,
    fontWeight:'bold',
    paddingBottom:7,

  },
  aditionals:{
    width:150,
  },
  forgotBtnArea:{
    paddingVertical:20,
    alignSelf:'flex-end',
  },
  forgoBtnText:{
    fontSize:14,
    fontWeight:'bold',
    color:'#4162b7',
  },
  
  signUpArea:{
    flexDirection:'row',
    marginTop:30,
  },
  signUpText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#999',
  },
  signUpBtnText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#4162b7',
    marginLeft:5,
  },
   buttonText:{
    alignSelf:'center',
    color:  'whit',
    fontSize:16,
  },
  button2:{
    backgroundColor:'#008B8B',

    width:100,
    padding:10,
    borderRadius:5,
  },
  button3:{
    marginBottom:-10,
    width:100,
    //paddin:10,
    borderRadius:5,
    backgroundColor: '#008B8B'
  },
  button4:{
    //backgroundColor:'#00CED1',
    width:100,
    paddin:10,
    borderRadius:5,
    marginTop:10,
    alignItems:'center',
    marginLeft:100,
  },
   signUpText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#999',
  },
  })