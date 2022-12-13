import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View, } from 'react-native'
import React from 'react'
import { normalizeSize } from '../../../utility'
import GS from '../../../Styles/GlobalStyle'
import { Rtext } from '../../../Components/Rtext'
import Styles from '../../../Styles'
import { Ainput } from '../../../Components/Ainput'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native-virtualized-view'
import { Abutton } from '../../../Components/Abutton'


const EditAddress = () => {
    const {control} = useForm()
  return (
    <View style={{backgroundColor:"#fff", flex:1 }}>
        <ScrollView>
            <View style={Styles.globalContainer}>
                <View style={{alignItems:"center"}}>
                    <Image source={require("../../../assets/images/map2.png")} style={{height:normalizeSize(110), width:normalizeSize(110), resizeMode:"contain"}} />
                    <View style={[GS.row,GS.center,{marginTop:16}]}>
                        <Image source={require("../../../assets/icons/pin1.png")} style={{width:25, height:25, resizeMode:"contain"}} />
                        <Rtext style={{ paddingLeft:10, color:"#314602"}} fontWeight={"400"} fontSize={18}>Your Location</Rtext>

                    </View>
                    <Rtext style={{color:"#8C8C8C", marginTop:16}} fontSize={12}>
                    Lorem ipsum dolor sit amet. Ut velit nulla hic ullam dolor non dolorem voluptatem ea iure rerum et dolores deserunt eos perspiciatis quia. Sed nostrum pariatur et placeat vitae et esse quam id nobis accusamus.
                    </Rtext>
                </View>
                <View style={{marginTop:"10%"}}>
                    <Rtext style={{color:"#648D0B"}} fontWeight={"400"} fontSize={18}>Enter complete address</Rtext>
                    <Rtext style={{color:"#8C8C8C", marginTop:16}} fontSize={12}>
                        This allow us to find you easily and give you timely delivery experience
                    </Rtext>
                    <View style={{marginTop:16}}>
                        <FlatList
                            // keyExtractor={(item,index)=> item+index}

                            ItemSeparatorComponent={()=><View style={{height:16}} />}
                            data={["Receiver's name", "Flat/House/Office No.","Street/Society / Office Name","Pin Number"]}
                            renderItem={({item, index})=>(
                                <View>
                                    <Ainput placeholder={item} style={{fontSize:14, paddingHorizontal:16}} name={"name"+index} outlineColor="#615F5F" control={control} />

                                </View>
                            )}
                        />
                        <Rtext style={{color:"#8C8C8C", marginTop:16}} fontSize={12}>Save address as</Rtext>
                        <View style={[GS.row,{marginTop:16}]}>
                            <TouchableHighlight onPress={()=>{}} underlayColor={"#314602"} style={{padding:8, paddingHorizontal:24, borderWidth:1, borderRadius:10, borderColor:"#484848"}}>
                                <Rtext style={{color:"#648D0B"}} fontSize={13}>Home</Rtext>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>{}} underlayColor={"#314602"}  style={{padding:8, paddingHorizontal:24, marginLeft:16, borderWidth:1, borderRadius:10, borderColor:"#484848"}}>
                                <Rtext style={{color:"#648D0B"}} fontSize={13}>Office</Rtext>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
                <View style={{alignItems:"center",marginTop:16}}>
                    <View style={{width:"45%"}}>
                        <Abutton onPress={()=> navigation.navigate("ProfileEdit")} style={{backgroundColor:"#78A615", borderRadius:7}} textColor={"#fff"} fontSize={14}>Save Address</Abutton>
                    </View> 
                </View>
            </View>

        </ScrollView>
    </View>
  )
}

export default EditAddress

const styles = StyleSheet.create({})