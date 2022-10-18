import { View,StyleSheet} from 'react-native';
import React from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const Signup = (props) => {
  return (
    <View>
      <GInput containerStyle={{height:'12%'}} placeholder={'Enter Email'} keyboardtype={'email-address'}/>
      <GInput containerStyle={{height:'12%'}} placeholder={'Enter Email'} keyboardtype={'email-address'}/>
      <GInput containerStyle={{height:'12%'}} placeholder={'Enter Email'} keyboardtype={'email-address'}/>
      <GInput containerStyle={{height:'12%'}} placeholder={'Enter Email'} keyboardtype={'email-address'}/>
      <GButton data={'Continue'}/>
    </View>
  )
}
export default Entry(Signup);

const styles = StyleSheet.create({
  container:{
      height:80,
      width:380,
      right:10,
      marginHorizontal:20, 
      borderRadius:80
  },
  inputField:{
  
      height: 50,
      margin: 12,
      padding: 10,
      borderRadius:15,
      backgroundColor:'white',
      
  }
})