import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'

const AddToCart = () => {
  return (
    <View style={{position:"absolute", bottom: 16}}>
        <View style={{width:SCREEN_WIDTH, alignItems:"center", paddingHorizontal:16}}>
            <View style={{height:normalizeSize(50), width:"100%", margin:8, backgroundColor:"#77A615", borderRadius:10}}>
                <View style={[{flex:1, paddingHorizontal:16}, GS.row_Between]}>
                    <View>
                    <Rtext style={{color:"#fff"}} fontSize={12}>1 item</Rtext>
                    <Rtext style={{color:"#fff"}} fontSize={12}>₹20</Rtext>
                    
                    </View>
                    <View style={GS.row}>
                        <Rtext style={{color:"#fff"}} fontSize={12}>View Cart</Rtext>
                        <Image source={require("../../../assets/icons/right_arrow.png")} style={{width:12, height:12, resizeMode:"contain", marginHorizontal:8, tintColor:"#fff"}} />
                    </View>

                </View>
            </View>

        </View>
    </View>
  )
}

export default AddToCart

const styles = StyleSheet.create({})