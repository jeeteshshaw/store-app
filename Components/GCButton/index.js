import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple } from 'react-native-paper'
import { Fonts } from '../../utility/CommonFonts'
import { normalizeSize } from '../../utility'
import { View } from 'react-native-animatable'
import { Rtext } from '../Rtext'

export default function GButton(props) {
    const [first, setfirst] = useState(1)
    function SetPlus(props) {
        console.log("Pluss");
    }
    function SetMinus(props) {
        console.log("Minus");
    }

  return (
    <View style={[Button_style.main,Fonts.Bold,props.style]}>
      {/* <Text style={[Button_style.text,props.textStyle]}>{props.data}</Text> */}
      <View style={[{flexDirection:'row',justifyContent:'center',alignContent:"space-between"},props.design]}>
        <TouchableRipple onPress={SetMinus}>
            <Rtext fontSize={15}  style={{color:'white'}}>-</Rtext>
        </TouchableRipple>
        <View style={{marginHorizontal:10}}>
            <Rtext fontSize={15}  style={{color:'white'}}>{first}</Rtext>
        </View>
        <TouchableRipple onPress={SetPlus}>
            <Rtext fontSize={15}  style={{color:'white'}}>+</Rtext>
        </TouchableRipple>
      </View>
    </View>
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