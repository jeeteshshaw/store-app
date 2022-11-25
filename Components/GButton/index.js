import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import { Fonts } from '../../utility/CommonFonts'
import { normalizeSize } from '../../utility'

export default function GButton(props) {
  return (
    <TouchableRipple onPress={props.press} style={[Button_style.main,Fonts.Bold,props.style]}>
      <Text style={[Button_style.text,props.textStyle]}>{props.data}</Text>
    </TouchableRipple>
  )
}

const Button_style = StyleSheet.create({
 main:{
   justifyContent:'center',
  backgroundColor:'#648D0B',
  height:normalizeSize(40),
  width:'50%',
  borderRadius:10,
  alignSelf:'center',
  alignItems:"center"
},
  text:{
    textAlign:'center',
    // margin:10,
    // height:'100%',
    fontSize:18,
    color:'white'
  },
});