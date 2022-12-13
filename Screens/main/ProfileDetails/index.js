import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GS from '../../../Styles/GlobalStyle'
import Styles from '../../../Styles'
import { Rtext } from '../../../Components/Rtext'
import { Abutton } from '../../../Components/Abutton'
import { useNavigation } from '@react-navigation/native'

const ProfileDetails = () => {
  const navigation=  useNavigation();
  return (
    <View style={[GS.container, GS.center, {backgroundColor:"rgba(0,0,0,0.7)"}, Styles.globalContainer]}>
      <View style={{backgroundColor:"#fff", width:"100%", borderRadius:11, padding:10}}>
        <Rtext style={{textAlign:"center"}} fontWeight={"700"} fontSize={15}>Profile</Rtext>
        <View style={{padding:16}}>
          <Rtext style={{ marginBottom:6, color:"#5C5A5A"}} fontSize={13}>Name : Subhrajeet Roy Chowdhury</Rtext>
          <Rtext style={{ marginBottom:6, color:"#5C5A5A"}} fontSize={13}>Email : subhrajeetroy@gmail.com</Rtext>
          <Rtext style={{ marginBottom:6, color:"#5C5A5A"}} fontSize={13}>Phone Number : 85**0***25</Rtext>
          <Rtext style={{ marginBottom:6, color:"#5C5A5A"}} fontSize={13}>Alternative Phone Number : 81***4***5</Rtext>
          <View style={GS.row_Between}>
            <View style={{width:"45%"}}>
              <Abutton onPress={()=> navigation.navigate("ProfileEdit")} style={{backgroundColor:"#78A615"}} textColor={"#fff"} fontSize={14}>Update Profile</Abutton>
            </View> 
            <View style={{width:"45%"}}>
              <Abutton onPress={()=> navigation.navigate("ProfileResetPassword")} style={{backgroundColor:"#9DE601"}} textColor={"#fff"}  fontSize={14}>Change Password</Abutton>
            </View> 
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
    
})