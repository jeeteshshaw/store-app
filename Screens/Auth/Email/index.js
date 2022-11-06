import { View,Text,StyleSheet} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput'
import GButton from '../../../Components/GButton'
import {Fonts} from '../../../utility/CommonFonts'



const Enter_Email = (props) => {

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text style={[Email_Style.text_style,Fonts.Bold]}> Enter Email</Text>
      <GInput
      placeholder={'Enter Email'}
      keyboardtype={'email-address'}
      />
      <GButton style={{marginTop:20}} data={'Continue'} press={()=>(props.navigation.navigate('OTP',{isSignUp:false}))}/>
    </View>
  )
}

export default Entry(Enter_Email);

const Email_Style = StyleSheet.create({
    text_style:{
      textAlign:'center',
      color:'white', 
      fontSize:23,
      width:'40%',
      paddingBottom:'4%'
    },
    })