import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import { Abutton } from '../../../Components/Abutton'
import { useNavigation } from '@react-navigation/native'

const MyOrder = () => {
  return (
    <View style={[Styles.globalContainer,{backgroundColor:"#fff", paddingVertical:0},GS.container]}>
      <FlatList
        ItemSeparatorComponent={()=> <View style={{height:16}} />}
        ListHeaderComponent={()=> <View style={{height:16}} />}
        ListFooterComponent={()=> <View style={{height:16}} />}
        keyExtractor={(item)=> item+"sadasdasdasd"}
        data= {[1,2,3,4,5,6]}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
            <RenderItem isGrey={item>2}  />
        )}
      />
        
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({})

const RenderItem = ({isGrey})=>{
    const navigation = useNavigation()
    return (
        <View style={{padding:10, borderRadius:7, borderColor:"#D9D9D9", borderWidth:1}}>
            <View style={[GS.row,]}>
                <View style={{height:"100%" , paddingRight:16}}>
                    <Image source={require("../../../assets/images/order1.png")} style={{width:normalizeSize(60),height:normalizeSize(40), resizeMode:"contain"}} />
                </View>
                <View style={[GS.container]}>
                    <Rtext fontWeight='700' fontSize={13} numberOfLines={1}>Lorem ipsum dolor sit</Rtext>
                    <Rtext fontSize={11} style={{color:"#7C7B7B",marginTop:2}}>Total amount ₹70</Rtext>
                    <Rtext fontSize={11} style={{color:"#615F5F"}}>1 item</Rtext>
                </View>
                <View style={{ height:"100%"}}>
                    <View style={{width:normalizeSize(65)}}>
                        <Abutton onPress={()=> navigation.navigate("ProfileEdit")} style={{backgroundColor:isGrey?"#D9D9D9":"#78A615", height:normalizeSize(30), marginTop:0}} textColor={isGrey?"#7C7B7B":"#fff"} fontSize={11} fontWeight={"700"}>Will Delivered</Abutton>
                    </View> 
                </View>
            </View>
            <View style={[{marginVertical:8},GS.row_Between]}>
                <Rtext fontSize={11} style={{color:"#615F5F"}}>Will placed on wed, 7 Dec, 2022, 10:05am</Rtext>
                <TouchableOpacity onPress={()=> navigation.navigate("OrderTrack")} style={GS.row}>
                    <Rtext fontSize={12} style={{color:"#648D0B"}} fontWeight={"700"}>View Details </Rtext>
                    <Image source={require("../../../assets/icons/right_arrow.png")} style={{width:12, height:12, resizeMode:"contain"}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}