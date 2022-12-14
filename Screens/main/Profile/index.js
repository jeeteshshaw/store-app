import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { Rtext } from '../../../Components/Rtext'
import Styles from '../../../Styles'
import Globalstyles from '../../../Styles/GlobalStyle'
import { normalizeSize } from '../../../utility'
import { ProfileOptionList } from '../../../store/static'
import { ThemeLightGreen } from '../../../config/Colors'
import { LogoutSuccessfully } from '../../../store/auth'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <View style={[Globalstyles.container, {backgroundColor:"#fff"}]}>
      <ScrollView>
        <View style={[Styles.globalContainer]}>
            <Rtext fontWeight='700'>My Account</Rtext>
            <Rtext style={{color:"#747474"}}>Subhrajeet Roy Chowdhury</Rtext>
            <View style={{marginTop:16}}>
                <Image source={require("../../../assets/images/profileImg.png")} style={{width:"100%", height:normalizeSize(85), resizeMode:"contain"}} />

            </View>
            <View style={{marginTop:16}}>
                <Rtext style={{color:"#747474"}}>Your Informatiom</Rtext>
                <View style={{marginVertical:20}}>
                    <FlatList
                        data={ProfileOptionList}
                        ItemSeparatorComponent={()=><View style={{height:normalizeSize(20)}} />}
                        renderItem={({item, index})=>(
                            <TouchableOpacity onPress={()=>{
                                item.name==="Logout"? dispatch(LogoutSuccessfully()): navigation.navigate(item.path)
                            }} style={Globalstyles.row_Between}>
                                <View style={Globalstyles.row}>
                                    <View style={[{width:normalizeSize(30), height:normalizeSize(30), borderRadius:normalizeSize(15), backgroundColor:"#BAEE4D"}, Globalstyles.center]}>
                                        <Image source={item.icon} style={Globalstyles.icon}/>
                                    </View>
                                    <Rtext fontSize={15} style={{paddingLeft:16}}>{item.name}</Rtext>
                                </View>
                                <View>
                                    <Image source={require("../../../assets/icons/right_arrow2.png")} style={Globalstyles.icon}/>

                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})