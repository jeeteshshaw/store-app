import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { normalizeSize } from '../../utility'
import GS from "../../Styles/GlobalStyle"
import { Rtext } from '../Rtext'
import { Divider, TouchableRipple } from 'react-native-paper'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeDarkGreen, ThemeLightGreen } from '../../config/Colors'
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {
    const navigation = useNavigation();
    const [showVandor, setShowVandor] = useState(false);
    return (
        <View style={{ height: normalizeSize(85), backgroundColor: "#fff" }}>
            <View style={[GS.row_Between, { padding: 10, paddingHorizontal: 16 }]}>
                <View style={{ width: "50%", flexDirection: "row", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icons/pin3.png")} style={GS.icon} />

                    <Rtext style={{ textAlign: "center", color: ThemeDarkGreen }} fontSize={10}>2/4 Anandabhaban, Kolkata, 700001, West Bengal, India</Rtext>

                </View>
                <View style={{ position:"relative",marginLeft: 16,}}>

                <TouchableRipple onPress={()=>setShowVandor(!showVandor)} style={[{ borderColor: ThemeLightGreen, borderWidth: 1, borderRadius: 20,backgroundColor:showVandor?ThemeDarkGreen:"#fff"  }]}>
                    <View style={[GS.row, { margin: 4, marginHorizontal: 10 }]}>
                        <Rtext style={{ color: showVandor?"#fff":ThemeLightGreen }} fontSize={10}>Select Vendor </Rtext>
                        {/* <MCI name='menu-down' size={16} color={ThemeLightGreen} /> */}
                        <Image source={require("../../assets/icons/down-filled1.png")} style={{ width: 6, height: 6, resizeMode: "contain" }} />

                    </View>
                </TouchableRipple>
                    {

                        showVandor && (
                            <View style={{position:"absolute", bottom:-50,zIndex:10,  elevation:5}}>
                                <Rtext style={{width:100, padding:4, backgroundColor:"#fff", textAlign:"center",elevation:10}} fontSize={9}>Retail</Rtext>
                                <Rtext style={{width:100, padding:4, backgroundColor:"#fff", marginTop:2, textAlign:"center",elevation:10}} fontSize={9}>Retail</Rtext>
                            </View>
                        )
                    }
                </View>
                <TouchableRipple style={{ borderColor: ThemeLightGreen, borderWidth: 1, borderRadius: 20, marginLeft: 16 }}>
                    <Image source={require("../../assets/icons/profile-user1.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                </TouchableRipple>
            </View>
            <View style={[GS.row_Between, { borderRadius: 20, borderWidth: 2, borderColor: "#000", position:"relative", backgroundColor: "#fff", height: normalizeSize(30), marginHorizontal: 16 }]}>

                <TextInput
                    style={{ fontSize: normalizeSize(12), paddingHorizontal: 16, marginVertical: 0, paddingVertical: 0, color:"#000" }}
                    placeholder="Search"
                    selectionColor={"black"}
                    onFocus={()=>navigation.navigate("SearchProduct")}
                    cursorColor="black"
                    placeholderTextColor={"#A7A7A7"}
                />
                <View style={{ paddingHorizontal: 16 }}>
                    <MCI name="magnify" size={24} color={"#9DE601"} />

                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})