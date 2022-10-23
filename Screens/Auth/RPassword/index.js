import { Text,View,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reset_Password = (props) => {
  return (
    <View style={{height:'60%'}}>
    <View style={{flex:1}}>
      <Text style={style.text}>
        New Password
      </Text>
      <GInput  placeholder={'Enter Password'} secureText={true} keyboardtype={'default'}/>
      <Text style={style.text}>
        Confirm Password
      </Text>
      <GInput  placeholder={'Confirm Password'} secureText={true} keyboardtype={'default'}/>
      <GButton style={{marginTop:'1%'}} data={'Continue'}  press={()=>(props.navigation.navigate('Skip'))}/>
    </View>
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