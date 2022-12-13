import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GS from '../../../Styles/GlobalStyle'
import Styles from '../../../Styles'
import { Rtext } from '../../../Components/Rtext'
import { Abutton } from '../../../Components/Abutton'
import { useNavigation } from '@react-navigation/native'

const ManageAddress = () => {
  const navigation=  useNavigation();
  return (
    <View style={[GS.container, GS.center, {backgroundColor:"rgba(0,0,0,0.7)"}, Styles.globalContainer]}>
      <View style={{backgroundColor:"#fff", width:"100%", borderRadius:11, padding:10}}>
        <View style={{padding:16}}>
            <TouchableOpacity onPress={()=> navigation.navigate("EditAddress")} style={GS.row}>
                <Image source={require("../../../assets/icons/pin1.png")} style={{width:16, height:16, resizeMode:"contain"}} />
                <Rtext style={{ paddingLeft:10, color:"#9DE601"}} fontWeight={"400"} fontSize={13}>Add New Address</Rtext>

            </TouchableOpacity>

           <FlatList
              data={["Home", "Office","Other",]}
              keyExtractor={(item, index)=> item+index}
              ListFooterComponent={()=> <View style={{height:20}} />}
              renderItem={({item})=>(
                <View style={{marginTop:20}}>
                  <View style={GS.row}>
                      <Image source={require("../../../assets/icons/pin1.png")} style={{width:16, height:16, resizeMode:"contain"}} />
                      <Rtext style={{ paddingLeft:5, color:"#000"}} fontWeight={"700"} fontSize={14}>{item}</Rtext>
    
                  </View>
                  <View style={[GS.row]}>
                    <View style={{flex:1}}>
                      <Rtext style={{ paddingHorizontal:10,paddingLeft:20, color:"#314602"}} fontWeight={"400"} fontSize={12}>Subhrajeet Roy Chowdhury- 551/A, Talbagan, Kolkata</Rtext>
    
                    </View>
                    <View style={GS.row}>
                      <Rtext style={{color:"#1B23E7"}}  fontSize={12}>Edit</Rtext>
                      <Rtext style={{color:"#1B23E7", marginLeft:16}}  fontSize={12}>Delete</Rtext>
                    </View>
                  </View>
                </View>
              )}
           />
          
          
        </View>
      </View>
    </View>
  )
}

export default ManageAddress

const styles = StyleSheet.create({
    
})