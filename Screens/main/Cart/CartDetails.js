import { View, Text } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext';
import GCButton from '../../../Components/GCButton'

const CartDetails = (props) => {
  return (
    <View style={{flexDirection:'row', marginTop:25, paddingLeft:15}}>
          <Image source={require('../../../assets/images/Cart_1.png')} style={{resizeMode:"contain",height:normalizeSize(100),width:normalizeSize(80)}}/>
          <View style={{marginTop:15, marginLeft:15}}>            
                <Rtext fontWeight='400' fontSize={12} style={[styles.Rcolor,{width:deviceWidth-100}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elite</Rtext>
                <View style={{flexDirection:'row', marginTop:5}}>
                <Rtext style={{marginHorizontal:20}}> ₹80</Rtext>
                <GCButton style={{height:30, width:70,borderRadius:4}} />
                </View>
            </View>
    </View>
  )
}

export default CartDetails;