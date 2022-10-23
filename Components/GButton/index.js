import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'

export default function GButton(props) {
  return (
    <TouchableRipple onPress={props.press} style={[Button_style.main,props.style]}>
      <Text style={Button_style.text}>{props.data}</Text>
    </TouchableRipple>
  )
}

const Button_style = StyleSheet.create({
 main:{
   justifyContent:'center',
  backgroundColor:'#648D0B',
  height:37,
  width:'50%',
  borderRadius:10,
  alignSelf:'center',
},
  text:{
    textAlign:'center',
    // padding:10,
    margin:10,
    height:'70%',
    fontSize:18,
    color:'white'},
});