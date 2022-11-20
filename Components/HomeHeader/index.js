import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { normalizeSize } from '../../utility'
import GS from "../../Styles/GlobalStyle"
import { Rtext } from '../Rtext'
import { TouchableRipple } from 'react-native-paper'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeDarkGreen, ThemeLightGreen } from '../../config/Colors'

const HomeHeader = () => {
    return (
        <View style={{ height: normalizeSize(85), backgroundColor: "#fff" }}>
            <View style={[GS.row_Between, { padding: 10, paddingHorizontal: 16 }]}>
                <View style={{ width: "50%", flexDirection: "row", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icons/pin3.png")} style={GS.icon} />

                    <Rtext style={{ textAlign: "center", color: ThemeDarkGreen }} fontSize={10}>2/4 Anandabhaban, Kolkata, 700001, West Bengal, India</Rtext>

                </View>
                <TouchableRipple style={[{ borderColor: ThemeLightGreen, borderWidth: 1, borderRadius: 20, marginLeft: 16 }]}>
                    <View style={[GS.row, { margin: 4, marginHorizontal: 10 }]}>
                        <Rtext style={{ color: ThemeLightGreen }} fontSize={10}>Select Vendor </Rtext>
                        {/* <MCI name='menu-down' size={16} color={ThemeLightGreen} /> */}
                        <Image source={require("../../assets/icons/down-filled1.png")} style={{ width: 6, height: 6, resizeMode: "contain" }} />

                    </View>
                </TouchableRipple>
                <TouchableRipple style={{ borderColor: ThemeLightGreen, borderWidth: 1, borderRadius: 20, marginLeft: 16 }}>
                    <Image source={require("../../assets/icons/profile-user1.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                </TouchableRipple>
            </View>
            <View style={[GS.row_Between, { borderRadius: 20, borderWidth: 2, borderColor: "#000", position:"relative", backgroundColor: "#fff", height: normalizeSize(30), marginHorizontal: 16 }]}>

                <TextInput
                    style={{ fontSize: normalizeSize(12), paddingHorizontal: 16, marginVertical: 0, paddingVertical: 0, color:"#000" }}
                    placeholder="Search"
                    selectionColor={"black"}
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