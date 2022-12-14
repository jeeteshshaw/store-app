import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Rtext } from '../Rtext'
import { ThemeDarkGreen } from '../../config/Colors'
import { useNavigation } from '@react-navigation/native'
import GS from '../../Styles/GlobalStyle'
import { SCREEN_WIDTH } from '../../utility'
import { setCart } from '../../store/common'
import { useDispatch } from 'react-redux'

const ProductCard1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")} style={{ backgroundColor: "#fff", borderColor:ThemeDarkGreen,borderWidth:1,elevation: 2, width:"100%", height:"100%", }}>
        <Image source={require("../../assets/images/category1.png")} style={{ height: 80, width: "100%", resizeMode: "stretch", }} />
        <View style={{ borderWidth: 3, borderColor: "#314602", borderTopColor: "#fff", flex:1, paddingHorizontal: 4 }}>
        <View style={[GS.container]}>
        <Rtext fontSize={8}>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,</Rtext>
        </View>
        <View style={[GS.row_Between, { padding: 4 }]}>
            <Rtext fontSize={10} style={{ color: "#000" }} numberOfLines={1}>20$</Rtext>
            {/* <Rtext fontSize={10} style={{ color:"#fff"}} numberOfLines={1}>20$</Rtext> */}
            <TouchableOpacity onPress={()=>{
              dispatch(setCart(true))
            }} style={[GS.btn, GS.center, { padding:4 }]} >
            <Rtext style={{ color: "#fff" }} fontSize={10}>Add</Rtext>
            </TouchableOpacity>
            {/* <View onPress={()=>{
              dispatch(setCart(true))
            }} style={[GS.btn, GS.center, { height:25 }]} >
            <View style={GS.row} fontSize={10}>
            <Rtext style={{ color: "#fff" }} fontSize={12}>+ </Rtext>
            <Rtext style={{ color: "#fff" }} fontSize={10}> 0 </Rtext>
              
            
            <Rtext style={{ color: "#fff", marginTop:-2 }} fontSize={14}> -</Rtext>

              </View>
            </View> */}

        </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCard1

const styles = StyleSheet.create({})