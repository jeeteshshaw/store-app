import { Text,View,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reset_Password = (props) => {
  return (
    <View style={{flex:1}}>
      <Text style={style.text}>
        New Password
      </Text>
      <GInput  placeholder={'Enter Password'} secureType={true} keyboardtype={'default'}/>
      <Text style={style.text}>
        Confirm Password
      </Text>
      <GInput  placeholder={'Confirm Password'} secureType={true} keyboardtype={'default'}/>
      <GButton style={{marginTop:22}} data={'Continue'}  press={()=>(console.log("Continue Pressed from Reset Password"))}/>
    </View>
  )
}

export default Entry(Reset_Password)

const style = StyleSheet.create({
  text:{
    color:'white',
    fontSize:18,
    justifyContent:'center',
    paddingHorizontal:'15%',
    paddingVertical:'2%'
  }
})