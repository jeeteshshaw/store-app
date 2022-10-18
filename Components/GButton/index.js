import { View, Text } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'

export default function GButton(props) {
  return (
    <TouchableRipple onPress={props.press} style={{backgroundColor:'#648D0B', height:45, width:180,borderRadius:10, alignSelf:'center'}}>
      <Text style={{textAlign:'center', padding:10, fontSize:18,color:'black'}}>{props.data}</Text>
    </TouchableRipple>
  )
}