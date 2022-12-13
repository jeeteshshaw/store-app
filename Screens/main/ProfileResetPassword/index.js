import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import GS from '../../../Styles/GlobalStyle'
import Styles from '../../../Styles'
import { Rtext } from '../../../Components/Rtext'
import { Abutton } from '../../../Components/Abutton'
import { Feather } from '@expo/vector-icons'

const ProfileResetPassword = () => {
    return (
        <View style={[GS.container, GS.center, Styles.globalContainer]}>
            <View style={{ backgroundColor: "#fff", width: "100%", borderRadius: 11, padding: 10 }}>
                <Rtext style={{ textAlign: "center" }} fontWeight={"700"} fontSize={15}>Profile</Rtext>
                <View style={{ padding: 16 }}>
                    <FlatList
                        data={["Old Password", "New Password", "Confirm Password"]}
                        ItemSeparatorComponent={()=> <View style={{height:10}} />}
                        renderItem={({item, index}) => (
                            <View>
                                <Rtext style={{ color: "#5C5A5A" }} fontSize={13}>{item}</Rtext>
                                <View style={[GS.row_Between, { borderBottomWidth: 1, marginHorizontal: 10 }]}>
                                    <TextInput secureTextEntry style={{ flex: 1, color:"#9DE601" }} />
                                  
                                </View>
                            </View>
                        )}
                    />
                    

                    <View style={GS.center}>
                        <View >
                            <Abutton style={{ backgroundColor: "#78A615", borderRadius:100, paddingHorizontal:28 }} textColor={"#fff"} fontSize={14}>Done</Abutton>
                        </View>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileResetPassword

const styles = StyleSheet.create({

})