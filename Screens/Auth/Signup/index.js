import { View,StyleSheet} from 'react-native';
import React from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const Signup = (props) => {
  return (
    <View style={{flex:1}}>
      <GInput containerStyle={{height:37}}  placeholder={'Name'} keyboardtype={'default'}/>
      <GInput containerStyle={{height:37}}  placeholder={'Email Address'} keyboardtype={'email-address'}/>
      <GInput containerStyle={{height:37}}  placeholder={'Password'} keyboardtype={'default'} secureType={true} />
      <GInput containerStyle={{height:37}}  placeholder={'Confirm Password'} secureType={true} keyboardtype={'default'}/>
      <GButton style={{height:37}} data={'Continue'} press={()=>(props.navigation.navigate('OTP',{isSignUp:true}))}/>
    </View>
  )
}
export default Entry(Signup);
