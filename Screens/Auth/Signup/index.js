import { View,StyleSheet,ScrollView} from 'react-native';
import React, { useState } from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';
import GModal from '../../../Components/GModal';

const Signup = (props) => {
  return (
    <View style={{flex:1}}>
      <GInput  placeholder={'Name'} keyboardtype={'default'}/>
      <GInput  placeholder={'Email Address'} keyboardtype={'email-address'}/>
      <GInput  placeholder={'Password'} keyboardtype={'default'} secureText={true} />
      <GInput  placeholder={'Confirm Password'} secureText={true} keyboardtype={'default'}/>
      <GButton data={'Continue'} press={()=>(props.navigation.navigate('OTP',{isSignUp:true}))}/>
    </View>
  )
}
export default Entry(Signup);
