import { View,StyleSheet,ScrollView} from 'react-native';
import React, { useState } from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';
import GModal from '../../../Components/GModal';

const Signup = (props) => {
  const [modalactivity, setModalActivity] = useState(false)
    const UpdatingState=()=>{
        setModalActivity(false);
        props.navigation.navigate('Login');
    }
  return (
    <View style={{flex:1}}>
      <GInput  placeholder={'Name'} keyboardtype={'default'}/>
      <GInput  placeholder={'Email Address'} keyboardtype={'email-address'}/>
      <GInput  placeholder={'Password'} keyboardtype={'default'} secureText={true} />
      <GInput  placeholder={'Confirm Password'} secureText={true} keyboardtype={'default'}/>
      <GButton data={'Continue'} press={()=>(setModalActivity(true))}/>
      <GModal modalVisible={modalactivity} text={"You have successfully Signed Up."} modalVisiblity={UpdatingState} />
    </View>
  )
}
export default Entry(Signup);
