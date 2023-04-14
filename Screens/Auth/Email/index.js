import { View,Text,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput'
import GButton from '../../../Components/GButton'
import { Fonts } from '../../../utility/CommonFonts';
import { Request } from '../../../config/Request'
import { showFlashMessage } from '../../../utility'


const submitForgetPassword = (email)=> {
  return Request("post", "/auth/forgotpassword", {email});
}

const Enter_Email = (props) => {
  const [email, setEmail] = useState("");
  const onContinuePress = async() => {
    try {
      const res = await submitForgetPassword(email);
      props.navigation.navigate('OTP',{isSignUp:false, user_id: res.data.info.id})
      console.log({res:res.data});
    } catch (er) {
      console.log(er.response.data);
      // showFlashMessage(er.response.data.errors.error,"", "danger");
    }
  }
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text style={[Email_Style.text_style,Fonts.Bold]}> Enter Email</Text>
      <GInput
      placeholder={'Enter Email'}
      keyboardtype={'email-address'} 
      onChangeText={setEmail}
      />
      <GButton  data={'Continue'} press={onContinuePress}/>
    </View>
  )
}

export default Entry(Enter_Email);

const Email_Style = StyleSheet.create({
    text_style:{
      textAlign:'center',
      color:'white', 
      fontSize:20,
      width:'37%',
      paddingBottom:'4%'
    },
    })