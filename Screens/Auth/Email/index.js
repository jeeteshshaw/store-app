import { View,Text,StyleSheet} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput'
import GButton from '../../../Components/GButton'



const Enter_Email = (props) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text style={Email_Style.text_style}> Enter Email</Text>
      <GInput
      placeholder={'Enter Email'}
      keyboardtype={'email-address'}
      />
      <GButton data={'Continue'} press={()=>(props.navigation.navigate('OTP'))}/>
    </View>
  )
}

export default Entry(Enter_Email);

const Email_Style = StyleSheet.create({
    text_style:{
      textAlign:'center',
      color:'white', 
      fontSize:23,
      width:'37%',
      paddingBottom:'4%'
    },
    })