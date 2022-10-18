import { View,Text,StyleSheet} from 'react-native'
import React from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput'
import GButton from '../../../Components/GButton'



const Enter_Email = (props) => {
  return (
    <View>
      <Text style={Email_Style.text_style}> Enter Email</Text>
      <GInput placeholder={'Enter Email'} keyboardtype={'email-address'}/>
      <GButton data={'Continue'} press={()=>(props.navigation.navigate('Reset'))}/>
    </View>
  )
}

export default Entry(Enter_Email);

const Email_Style = StyleSheet.create({
    text_style:{
      marginLeft:140,
      marginVertical:15,
      color:'white', 
      fontSize:18
    },   
    })