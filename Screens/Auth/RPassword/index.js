import { View} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const Reset_Password = (props) => {
  return (
    <View style={{flex:1}}>
      <GInput containerStyle={{height:'25%'}} placeholder={'Enter Password'} secureText={true} keyboardtype={'default'}/>
      <GInput containerStyle={{height:'25%'}} placeholder={'Confirn Password'} secureText={true} keyboardtype={'default'}/>
      <GButton data={'Continue'} style={{paddingButtom:20}} press={()=>(console.warn("Continue Pressed"))}/>
    </View>
  )
}

export default Entry(Reset_Password)