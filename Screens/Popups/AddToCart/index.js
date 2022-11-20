import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'

const AddToCart = () => {
  return (
    <Modal transparent>
        <View style={{flex:1, justifyContent:"flex-end"}}>
            <View style={{height:normalizeSize(50),  margin:8, backgroundColor:"#77A615", borderRadius:10}}>
                <View style={[{flex:1, paddingHorizontal:16}, GS.row_Between]}>
                    <View>
                    <Rtext style={{color:"#fff"}} fontSize={12}>1 iteam</Rtext>
                    <Rtext style={{color:"#fff"}} fontSize={12}>₹20</Rtext>
                    
                    </View>
                    <View style={GS.row}>
                        <Rtext style={{color:"#fff"}} fontSize={12}>View Cart</Rtext>
                        <Image source={require("../../../assets/icons/right_arrow.png")} style={{width:12, height:12, resizeMode:"contain", marginHorizontal:8}} />
                    </View>

                </View>
            </View>

        </View>
    </Modal>
  )
}

export default AddToCart

const styles = StyleSheet.create({})