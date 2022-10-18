import { View} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const Reset_Password = (props) => {
  return (
    <View>
      <GInput placeholder={'Enter Password'} secureText={true} keyboardtype={'email-address'}/>
      <GInput placeholder={'Confirn Password'} secureText={true} keyboardtype={'email-address'}/>
      <GButton data={'Continue'} press={()=>(console.warn("Continue Pressed"))}/>
    </View>
  )
}

export default Entry(Reset_Password)