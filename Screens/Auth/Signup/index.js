import { View,StyleSheet} from 'react-native';
import React from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const Signup = (props) => {
  return (
    <View style={{flex:1}}>
      <GInput  placeholder={'Name'} keyboardtype={'default'}/>
      <GInput  placeholder={'Email Address'} keyboardtype={'email-address'}/>
      <GInput  placeholder={'Password'} keyboardtype={'default'} secureText={true} />
      <GInput  placeholder={'Confirm Password'} secureText={true} keyboardtype={'default'}/>
      <GButton style={{ height:'20%'}} data={'Continue'} press={()=>(props.navigation.navigate('OTP'))}/>
    </View>
  )
}
export default Entry(Signup);
